"use client"
import { useState } from 'react';
import { getItems } from "@/app/integrations/mrpeasy/mrpeasy.client";

export default function Home() {
    const [mrpEasyItems, setMrpEasyItems] = useState<MRPEasyItem[]>([]);

    const handleClick = async () => {
        try {
            const data = await getItems();
            setMrpEasyItems(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <button style={{ border: '1px solid black' }} onClick={handleClick}>
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
        </div>
    );
}
