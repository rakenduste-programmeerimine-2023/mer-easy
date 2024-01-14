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
                title: 'Product id',
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
                <Table rowKey="article_id" columns={ columns } dataSource={ tableData }/>
            </div>
        );
    }
}

export default DataTable;
