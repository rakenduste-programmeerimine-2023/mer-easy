"use client"
import React, { useState } from 'react';
import { apiGetMrpItems } from "@/app/integrations/mrpeasy/mrpeasy.client";
import { getItems } from "@/app/integrations/merit/merit.client";
import Menu from "@/components/Menu";
import '@/app/styles/layout.scss';
import Dashboard from "@/components/Dashboard";

const Home = () => {
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
            const data = await getItems();
            console.log(data); // TODO REMOVE
            setMeritItems('Found ' + data.length + ' items from Merit Aktiva! Check console to see items.');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="content">
            <Menu />
            <Dashboard />
        </div>
    );
}

export default Home;
