"use client"
import { useState } from 'react';
import { apiGetMrpItems } from "@/app/integrations/mrpeasy/mrpeasy.client";
import { apiGetMeritItems } from "@/app/integrations/merit/merit.client";
import '@/app/styles/homeStyles.scss'

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
        <div className="main-container">
            {/* Top left section for API buttons */}
            <div className="api-buttons">
                <div className="buttons">
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


            </div>

            <div className="flex">
                {/* Bottom left section for the nav panel */}
                <div className="nav-panel">
                    <div className="flex-column-container">
                        <button className="nav-button" onClick={() => console.log('Page 1 clicked')}>Page 1</button>
                        <button className="nav-button" onClick={() => console.log('Page 2 clicked')}>Page 2</button>
                        <button className="nav-button" onClick={() => console.log('Page 3 clicked')}>Page 3</button>
                        <button className="nav-button" onClick={() => console.log('Page 4 clicked')}>Page 4</button>
                        <button className="nav-button" onClick={() => console.log('Page 5 clicked')}>Page 5</button>
                        <button className="nav-button" onClick={() => console.log('Page 6 clicked')}>Page 6</button>
                    </div>
                </div>

                {/* Right section for the table with filters */}
                <div className="flex-content-container">
                    <div className="table-filters">
                        {/* Your table filters go here */}
                    </div>
                    <table>
                        {/* Your table content goes here */}
                    </table>
                </div>
            </div>
        </div>

    );
}
