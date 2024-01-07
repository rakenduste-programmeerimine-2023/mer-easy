import React from 'react';
import { Table } from 'antd';
import Actions from "@/components/Actions";

class DataTable extends React.Component<{ tableData: any }, any> {
    render() {
        let { tableData } = this.props;
        const columns = [
            {
                title: 'Uuid',
                dataIndex: 'uuid',
                key: 'uuid',
            },
            {
                title: 'Code',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Sales Price',
                dataIndex: 'SalesPrice',
                key: 'sales_price',
            },
            {
                title: 'Inventory Qty',
                dataIndex: 'quantity',
                key: 'quantity',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
            },
        ];

        return (
            <div className="table">
                <Actions />
                <Table rowKey="uuid" columns={ columns } dataSource={ tableData }/>
            </div>
        );
    }
}

export default DataTable;
