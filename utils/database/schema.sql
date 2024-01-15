-- schema.sql

-- Table: merit_items
CREATE TABLE merit_items (
    uuid UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    merit_id UUID UNIQUE NOT NULL,
    name TEXT NOT NULL,
    code TEXT NOT NULL,
    sales_price NUMERIC NOT NULL,
    quantity NUMERIC NOT NULL,
    type TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ
);

-- Table: mrp_items
CREATE TABLE mrp_items (
    uuid UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    article_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    deleted BOOLEAN NOT NULL,
    code TEXT NOT NULL,
    title TEXT NOT NULL,
    group_title TEXT NOT NULL,
    in_stock NUMERIC NOT NULL,
    available NUMERIC NOT NULL,
    booked NUMERIC NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    deleted_at TIMESTAMPTZ
);


