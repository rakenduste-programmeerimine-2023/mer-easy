"use client"
import React, { useState, useEffect, useRef } from 'react';
import { getItems } from "@/app/integrations/merit/merit.client";
import Menu from "@/components/Menu";
import DataTable from "@/components/Table";
import '@/app/styles/layout.scss';
import { MeritItemEntity } from "@/app/integrations/merit/entities/item.entity";

const MeritItems = () => {
    const [meritItems, setMeritItems] = useState<MeritItemEntity[]>([]);
    const hasMounted = useRef(false);

    const getMeritItems = async () => {
        try {
            const data = await getItems();
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
            <DataTable tableData={ meritItems } />
        </div>
    );
}

export default MeritItems;
