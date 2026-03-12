-- ==========================================================
-- 1. CLEANUP: DROP ALL TABLES (Old and New)
-- ==========================================================

-- Drop new schema tables
Drop TABLE IF EXISTS roasttype CASCADE;
DROp TABLE IF EXISTS productdetail CASCADE;
DROP TABLE IF EXISTS shipment CASCADE;
DROP TABLE IF EXISTS postman CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS lot CASCADE;
DROP TABLE IF EXISTS product_detail CASCADE;
DROP TABLE IF EXISTS address CASCADE;
DROP TABLE IF EXISTS supplier CASCADE;
DROP TABLE IF EXISTS roast_type CASCADE;
DROP TABLE IF EXISTS flavor CASCADE;
DROP TABLE IF EXISTS coffee CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Drop original schema tables (from postgreSql/create-tables.sql)
DROP TABLE IF EXISTS OrderItems CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS RecipeItems CASCADE;
DROP TABLE IF EXISTS MenuItems CASCADE;
DROP TABLE IF EXISTS Ingredients CASCADE;
DROP TABLE IF EXISTS Staff CASCADE;
DROP TABLE IF EXISTS Suppliers CASCADE;

-- ==========================================================
-- 2. CREATE NEW DATABASE STRUCTURE (Standardized & Improved)
-- ==========================================================

-- Users Table (Supports Register/Login and Roles)
CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    role VARCHAR(50) DEFAULT 'USER' -- 'ADMIN' or 'USER'
);

-- Coffee Table (The core bean type)
CREATE TABLE coffee (
    coffee_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Flavor Table (Specialty coffee flavor notes)
CREATE TABLE flavor (
    flavor_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    level INTEGER -- Intensity of flavor
);

-- Roast Type Table (Light, Medium, Dark)
CREATE TABLE roast_type (
    roast_id SERIAL PRIMARY KEY,
    roast_name VARCHAR(50) NOT NULL
);

-- Supplier Table (Roasters or Bean Suppliers)
CREATE TABLE supplier (
    supplier_id SERIAL PRIMARY KEY,
    supplier_name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Address Table (Linked to users for shipping)
CREATE TABLE address (
    address_id SERIAL PRIMARY KEY,
    home_address TEXT NOT NULL,
    province VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    postal_code INTEGER,
    username VARCHAR(255) REFERENCES users(username) ON DELETE CASCADE
);

-- Product Detail Table (The "Template" of a sellable item)
CREATE TABLE product_detail (
    product_detail_id SERIAL PRIMARY KEY,
    flavor_id INTEGER REFERENCES flavor(flavor_id),
    coffee_id INTEGER REFERENCES coffee(coffee_id),
    roast_id INTEGER REFERENCES roast_type(roast_id),
    supplier_id INTEGER REFERENCES supplier(supplier_id)
);

-- Lot Table (Inventory tracking by roast batch)
CREATE TABLE lot (
    lot_id SERIAL PRIMARY KEY,
    product_detail_id INTEGER REFERENCES product_detail(product_detail_id),
    date_of_roast DATE NOT NULL,
    exp_date DATE NOT NULL,
    quantity_in_lot INTEGER NOT NULL DEFAULT 0 CHECK (quantity_in_lot >= 0)
);

-- Orders Table (Header for user transactions)
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    username VARCHAR(255) REFERENCES users(username),
    address_id INTEGER REFERENCES address(address_id),
    order_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(50) DEFAULT 'Pending'
);

-- Order Items (The specific quantities of products in an order)
CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
    product_detail_id INTEGER REFERENCES product_detail(product_detail_id),
    quantity INTEGER NOT NULL CHECK (quantity > 0)
);

-- Postman Table (Shipping Carriers)
CREATE TABLE postman (
    postman_id SERIAL PRIMARY KEY,
    shipment_name VARCHAR(255) NOT NULL -- Kerry, Flash, JST, etc.
);

-- Shipment Table (Tracking delivery status)
CREATE TABLE shipment (
    shipping_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(order_id),
    address_id INTEGER REFERENCES address(address_id),
    postman_id INTEGER REFERENCES postman(postman_id)
);
