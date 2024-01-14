"use server"
import axios, { AxiosInstance } from 'axios';

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

const getItems = async (): Promise<MRPEasyItem[]> => {
    const client = createClient();

    try {
        const response = await client.get('/items');
        console.log('Found ' + response.data.length + ' MRPEasy items.'); // Leave this here for debugging!
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
};

export { getItems };
