import React from 'react';
import { Table } from 'antd';
import MrpeasyActions from "@/app/mrpeasy-items/MrpeasyActions";

class DataTable extends React.Component<{ tableData: any }, any> {
    render() {
        let { tableData } = this.props;
        const columns = [
            {
                title: 'Code',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Article id',
                dataIndex: 'article_id',
                key: 'article_id',
            },
            {
                title: 'Group',
                dataIndex: 'group_title',
                key: 'group_title',
            },
            {
                title: 'In Stock',
                dataIndex: 'in_stock',
                key: 'in_stock',
            },
            {
                title: 'Available',
                dataIndex: 'available',
                key: 'available',
            },
            {
                title: 'Booked',
                dataIndex: 'booked',
                key: 'booked',
            }
        ];

        return (
            <div className="table">
                <MrpeasyActions />
                <Table rowKey="article_id" columns={ columns } dataSource={ tableData }/>
            </div>
        );
    }
}

export default DataTable;
