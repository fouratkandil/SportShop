
<!-- Ecommerce App -->
<h1 align="center">Ecommerce App</h1>

<p align="center">
  <img src="https://previews.123rf.com/images/liubou/liubou1412/liubou141200061/34447086-set-of-various-sports-and-fitness-logo-emblem-graphics-and-icons-shop-sport-products.jpg" alt="Logo" height="200">
</p>

<p align="center">Welcome to the Ecommerce App, a modern and efficient platform designed to meet various ecommerce needs. This application allows users to browse products, manage their cart, and place orders.</p>

## Functional Requirements

A functional requirement specifies an action that a system must be capable of performing, without considering any physical constraints. The system must allow:

- **View Product Lists**: Users can view a list of products categorized by:
  - Children's products
  - Women's products
  - Men's products
- **Search Products**: Users can search for specific products using keywords.
- **Select Products**: Users can choose products to view more details or add them to their cart.
- **View Cart**: Users can view the contents of their shopping cart.
- **Cancel Orders**: Users can cancel their orders.
- **Place Orders**: Users can validate and place their orders.
- **Add Products**: Administrators can add new products to the catalog.
- **Delete Products**: Administrators can remove products from the catalog.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Python FastAPI
- **Database**: SQL (configured in FastAPI backend)



<p align="center">To see the features of our platform in action, please watch the demonstration video: <a href="path-to-video">front.mp4</a>.</p>

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python and pip installed
- SQL database setup

### Frontend Setup (Angular)

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app/frontend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

### Backend Setup (FastAPI)

1. Navigate to the backend directory:
   ```sh
   cd ../backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Configure the database connection in `app/core/config.py`.

5. Run the FastAPI application:
   ```sh
   uvicorn main:app --reload
   ```
6. The backend server will be running at `http://localhost:8000`.

### Database Setup

1. Open your SQL database management tool.
2. Import the database schema and data provided in the `database` folder.
3. Ensure the database connection settings in `backend/app/core/config.py` match your database configuration.

## Contact

If you have any questions or need further assistance, feel free to reach out to me at [Kandil Fourat](mailto:Kandilfourat@gmail.com).

---

Thank you for checking out our Ecommerce App! We hope you find it useful and easy to use.
```

