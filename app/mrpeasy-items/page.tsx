"use client"
import React, { useState, useEffect, useRef } from 'react';
import { getItems } from "@/app/integrations/mrpeasy/mrpeasy.client";
import Menu from "@/components/Menu";
import DataTable from "@/app/mrpeasy-items/MrpeasyTable";
import '@/app/styles/layout.scss';

const MrpeasyItems = () => {
    const [mrpeasyItems, setMrpeasyItems] = useState<MrpeasyItemEntity[]>([]);
    const hasMounted = useRef(false);

    const getMrpItems = async () => {
        try {
            const data = await getItems();
            setMrpeasyItems(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!hasMounted.current) {
            getMrpItems().then(() => hasMounted.current = true);
        }
    }, []);

    return (
        <div className="content">
            <Menu />
            <DataTable tableData={mrpeasyItems} />
        </div>
    );
}

export default MrpeasyItems;
