export type MrpEasyItemEntity = {
    uuid: string;
    article_id: string;
    product_id: string;
    deleted: boolean;
    code: string;
    title: string;
    group_title: string;
    in_stock: number;
    available: number;
    booked: number;
};
