# Coffee E-Commerce Project - GEMINI Context

This project is a specialized coffee bean e-commerce platform designed for cafes. It focuses on providing detailed information about coffee lots, including roast dates, expiration dates, flavor profiles, and delivery status.

## Project Overview

- **Objective:** Enable specialized cafes to purchase coffee beans with full transparency on roast details and shipping status.
- **Core Technologies:**
  - **Frontend:** HTML5, Vanilla CSS3 (Custom styling with Inter and Playfair Display fonts).
  - **Logic & Modeling:** JavaScript (ES6+) for entity definitions and business logic.
  - **Database:** PostgreSQL for relational data persistence.
  - **Design:** Excalidraw for Business Model Canvas, Use Case diagrams, and ER diagrams.

## Directory Structure

### Documentation & Requirements
- `01_my-ecommerce.md`: Problem statement and the proposed solution.
- `05_product_backlog.md`: List of features (Home, Product, Order, Admin pages) with priorities.
- `02_bussiness-model-canvas.excalidraw`: Visual business strategy.
- `03_user-case-diagram.excalidraw`: Use case diagram for user and admin interactions.
- `04_er_diagram.excalidraw`: Entity-Relationship diagram for the database.
- `path-to-master.md`: Detailed project roadmap or master guide.

### Implementation
- `coffeebean.html`: The main landing page and product catalog.
- `style.css`: Comprehensive styles for the web application.
- `06_bring-it-to-javascript.js`: JavaScript implementation of core data entities (Users, Products, Suppliers, Orders, Addresses).

### Database (PostgreSQL)
Located in the `postgreSql/` directory:
- `create-tables.sql`: Consolidated schema creation script.
- `01_supplier.sql` to `07_order_items.sql`: Data seeding scripts for each table.
- `query.sql` & `coffee-query.sql`: Sample queries for data retrieval and testing.

## Database Schema Highlights

The relational model includes the following core entities:
- **Suppliers:** Provide ingredients/beans.
- **Staff:** Manage orders and operations.
- **Ingredients:** Raw materials with stock levels and units.
- **MenuItems:** The products available for purchase (e.g., Ethiopia Yirgacheffe).
- **RecipeItems:** Links MenuItems to their constituent Ingredients.
- **Orders & OrderItems:** Track customer purchases and contents.

## Key Features (from Backlog)
1. **Home Page (High):** Product listings, login, and promotions.
2. **Product Page (High):** Detailed view of coffee lots (Roast Date, EXP) and "Add to Cart".
3. **Order Page (High):** Order summary, payment, and delivery status tracking.
4. **Admin Page (Medium):** Stock management and dashboard.

## Development Context

- **Workflow:** The project progresses from requirements (`01`, `05`) to modeling (`02-04`) and finally to implementation (`06`, `html/css`, `sql`).
- **Data Consistency:** Ensure that the JavaScript entities in `06_bring-it-to-javascript.js` stay synchronized with the PostgreSQL schema in `postgreSql/create-tables.sql`.
- **Styling:** Adhere to the aesthetic established in `style.css`, which uses a modern, clean look with a focus on typography and spacing.
