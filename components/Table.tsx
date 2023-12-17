import React from 'react';
import { Table } from 'antd';

class DataTable extends React.Component<{ tableData: any }, any> {
    render() {
        let {tableData} = this.props;
        const columns = [
            {
                title: 'Code',
                dataIndex: 'Code',
                key: 'Code',
            },
            {
                title: 'Name',
                dataIndex: 'Name',
                key: 'Name',
            },
            {
                title: 'Sales Price',
                dataIndex: 'SalesPrice',
                key: 'SalesPrice',
            },
            {
                title: 'Inventory Qty',
                dataIndex: 'InventoryQty',
                key: 'InventoryQty',
            },
            {
                title: 'Type',
                dataIndex: 'Type',
                key: 'Type',
            },
        ];

        return (
            <div className="table">
                <Table columns={columns} dataSource={tableData}/>
            </div>
        );
    }
}

export default DataTable;
