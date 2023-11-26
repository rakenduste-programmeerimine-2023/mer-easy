"use client"
import { useState } from 'react';
import { fetchData } from "@/app/integrations/merit/merit.client";

export default function Home() {
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        try {
            const data = await fetchData();
            console.log(data);
            setMessage(data.message); // Assuming the API returns an object with a "message" property
        } catch (error) {
            setMessage('Error fetching data');
        }
    };

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <span>{message || 'Sisselogitud!'}</span>
            <button style={{ border: '1px solid black' }} onClick={handleClick}>
                Click me!
            </button>
        </div>
    );
}
