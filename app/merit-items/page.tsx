"use client"
import React, {useState, useEffect, useRef} from 'react';
import { apiGetMeritItems } from "@/app/integrations/merit/merit.client";
import Menu from "@/components/Menu";
import DataTable from "@/components/Table";
import '@/app/styles/layout.scss';

const MeritItems = () => {
    const [meritItems, setMeritItems] = useState<MeritItem[]>([]);
    const hasMounted = useRef(false);

    const getMeritItems = async () => {
        try {
            const data = await apiGetMeritItems();
            setMeritItems(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!hasMounted.current) {
            getMeritItems().then(() => hasMounted.current = true);
        }
    }, []);

    return (
        <div className="content">
            <Menu />
            <DataTable tableData={meritItems} />
        </div>
    );
}

export default MeritItems;
