"use server"
import axios, { AxiosInstance } from 'axios';
import supabase from "@/utils/supabase/supabase";
import {MrpEasyItemEntity} from "@/app/integrations/mrpeasy/entities/item.entity";

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

const getItems = async (): Promise<MrpEasyItemEntity[]> => {
    const { data: mrp_items, error } = await supabase
        .from('mrp_items')
        .select('*')
        .is('deleted_at', null);

    if (error) {
        console.error('Error fetching data from Supabase:', error.message);
        throw error;
    }

    return mrp_items as MrpEasyItemEntity[];
}

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

const updateItems = async (): Promise<void> => {
    const apiItems = await apiGetMrpEasyItems();
    const mrpItems = await getItems();

    for (const item of mrpItems) {
        const matchingItemIndex = apiItems.findIndex((apiItem) => apiItem.article_id === item.article_id);

        if (matchingItemIndex !== -1) {
            const matchingItem = apiItems[matchingItemIndex];
            const { error } = await supabase
                .from('mrp_items')
                .update({
                    Update: undefined,
                    'code': matchingItem.code,
                    'title': matchingItem.title,
                    'group_title': matchingItem.group_title,
                    'in_stock': matchingItem.in_stock,
                    'available': matchingItem.available,
                    'booked': matchingItem.booked,
                    'deleted': matchingItem.deleted
                })
                .eq('article_id', item.article_id)
                .select();

            if (error) {
                console.error('Error updating MRPEasy items:', error.message);
                throw error;
            }

            apiItems.splice(matchingItemIndex, 1);
        }
    }

    await saveItems(apiItems);
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

export { getItems, updateItems };
