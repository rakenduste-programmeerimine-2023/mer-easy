"use client"
import { useState } from 'react';
import { apiGetMrpItems } from "@/app/integrations/mrpeasy/mrpeasy.client";
import { apiGetMeritItems } from "@/app/integrations/merit/merit.client";

export default function Home() {
    const [mrpEasyItems, setMrpEasyItems] = useState<MRPEasyItem[]>([]);
    const [meritItems, setMeritItems] = useState('');

    const getMrpEasyItems = async () => {
        try {
            const data = await apiGetMrpItems();
            setMrpEasyItems(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMeritItems = async () => {
        try {
            const data = await apiGetMeritItems();
            console.log(data); // TODO REMOVE
            setMeritItems('Found ' + data.length + ' items from Merit Aktiva! Check console to see items.');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <button style={{ border: '1px solid black' }} onClick={getMrpEasyItems}>
                Get MRPEasy Items!
            </button>
            {mrpEasyItems.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>Article ID</th>
                        <th>Product ID</th>
                        <th>Code</th>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mrpEasyItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.article_id}</td>
                            <td>{item.product_id}</td>
                            <td>{item.code}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <button style={{ border: '1px solid black' }} onClick={getMeritItems}>
                Get Merit Aktiva Items!
            </button>
            <span>{meritItems}</span>
        </div>
    );
}
