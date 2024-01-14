"use server"
import axios, { AxiosInstance } from 'axios';
import supabase from "@/utils/supabase/supabase";

const API_BASE_URL = process.env.MRPEASY_API_URL;

const createClient = (): AxiosInstance => {
    const headers = {
        'Content-Type': 'application/json',
        'api_key': process.env.MRPEASY_API_KEY,
        'access_key': process.env.MRPEASY_ACCESS_KEY,
    };

    return axios.create({
        baseURL: API_BASE_URL,
        headers,
    });
};

const apiGetMrpEasyItems = async (): Promise<MRPEasyItem[]> => {
    const client = createClient();

    try {
        const response = await client.get('/items');
        console.log('Found ' + response.data.length + ' MRPEasy items.'); // Leave this here for debugging!
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const getItems = async (): Promise<MRPEasyItem[]> => {
    const { data, error } = await supabase
        .from('mrp_items')
        .select('*');

    if (error) {
        console.error('Error fetching data from Supabase:', error.message);
        throw error;
    }

    return data as MRPEasyItem[];
}

const saveItems = async (items: MRPEasyItem[]): Promise<void> => {
    const itemsToInsert: object[] = [];
    for (const item of items) {
        itemsToInsert.push({
            article_id: item.article_id,
            product_id: item.product_id,
            deleted: item.deleted,
            code: item.code,
            title: item.title,
            group_title: item.group_title,
            in_stock: item.in_stock,
            available: item.available,
            booked: item.booked,
        });
    }

    const { error } = await supabase
        .from('mrp_items')
        .insert(itemsToInsert)
        .select()

    if (error) {
        console.error('Error saving MRPEasy items to Supabase:', error.message);
        throw error;
    }
}

export { getItems };
