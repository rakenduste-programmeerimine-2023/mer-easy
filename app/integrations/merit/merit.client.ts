"use server"
import axios, { AxiosInstance } from 'axios';
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";
import { createHmac } from "crypto";
import supabase from "@/utils/supabase/supabase";
import { MeritItemEntity } from "@/app/integrations/merit/entities/item.entity";

const API_BASE_URL = process.env.MERIT_API_URL;
const API_ID = process.env.MERIT_API_ID;
const API_KEY = process.env.MERIT_API_KEY;

const createMeritClient = (): AxiosInstance => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return axios.create({
        baseURL: API_BASE_URL,
        headers,
    });
};

const apiGetMeritItems = async (): Promise<MeritItem[]> => {
    const client = createMeritClient();

    try {
        const authString = getAuthorizationString();
        const response = await client.get('/getitems' + authString);
        console.log('Found ' + response.data.length + ' Merit items.'); // Leave this here for debugging!

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

const saveItems = async (items: MeritItem[]): Promise<void> => {
    const itemsToInsert: object[] = [];
    for (const item of items) {
        itemsToInsert.push({
            merit_id: item.ItemId,
            name: item.Name,
            code: item.Code,
            sales_price: item.SalesPrice,
            quantity: item.InventoryQty,
            type: item.Type
        });
    }

    const { error } = await supabase
        .from('merit_items')
        .insert(itemsToInsert)
        .select()

    if (error) {
        console.error('Error saving items to Supabase:', error.message);
        throw error;
    }
}

const getItems = async (): Promise<MeritItemEntity[]> => {
    const { data, error } = await supabase
        .from('merit_items')
        .select('*');

    if (error) {
        console.error('Error fetching data from Supabase:', error.message);
        throw error;
    }

    return data as MeritItemEntity[];
}

function getAuthorizationString(jsonData?: string): string {
    const timestamp = getTimestamp();
    const dataString = API_ID + timestamp + jsonData ?? '';
    const hash = createHmac('sha256', dataString, API_KEY);
    const signature = encodeToBase64(hash);

    return '?ApiId=' + API_ID + '&timestamp=' + timestamp + '&signature=' + signature;
}

function getTimestamp(): string {
    const d = new Date();
    const yyyy = d.getFullYear();
    const MM = pad2(d.getMonth() + 1);
    const dd = pad2(d.getDate());
    const HH = pad2(d.getHours());
    const mm = pad2(d.getMinutes());
    const ss = pad2(d.getSeconds());
    return yyyy + MM + dd + HH + mm + ss;
}

function pad2(n): string {
    return n > 9 ? '' + n : '0' + n;
}

export { getItems };
