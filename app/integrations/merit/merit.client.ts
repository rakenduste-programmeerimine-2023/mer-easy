"use server"
import axios, { AxiosInstance } from 'axios';
import { encodeToBase64 } from "next/dist/build/webpack/loaders/utils";
import { createHmac } from "crypto";

const API_BASE_URL = process.env.MERIT_API_URL;
const API_ID = process.env.MERIT_API_ID;
const API_KEY = process.env.MERIT_API_KEY;

const createClient = (): AxiosInstance => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return axios.create({
        baseURL: API_BASE_URL,
        headers,
    });
};

const apiGetMeritItems = async () => {
    const client = createClient();

    try {
        const authString = getAuthorizationString();
        const response = await client.get('/getitems' + authString);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

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

export { apiGetMeritItems };
