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
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);


