import React from 'react';
import { Table } from 'antd';
import MrpeasyActions from "@/app/mrpeasy-items/MrpeasyActions";

class DataTable extends React.Component<{ tableData: any }, any> {
    render() {
        let { tableData } = this.props;
        const columns = [
            {
                title: '',
                dataIndex: '',
                key: '',
            },
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
                title: 'Article_id',
                dataIndex: 'article_id',
                key: 'article_id',
            },
            {
                title: 'Product_id',
                dataIndex: 'product_id',
                key: 'product_id',
            },
            {
                title: 'Deleted',
                dataIndex: 'deleted',
                key: 'deleted',
            },
        ];

        return (
            <div className="table">
                <MrpeasyActions />
                <Table rowKey="uuid" columns={ columns } dataSource={ tableData }/>
            </div>
        );
    }
}

export default DataTable;
