# Crypto Stock Analysis Backend Service

This backend service aggregates data from cryptocurrency and stock APIs and exposes it as a single REST API.

## Project Structure

- **src/**: Contains the source code for the backend service.
  - **app.js**: Entry point of the application.
  - **controllers/**: Contains controllers for handling API requests.
    - **cryptoController.js**: Handles requests related to cryptocurrency data.
    - **stockController.js**: Handles requests related to stock data.
  - **routes/**: Contains route definitions for the API.
    - **cryptoRoutes.js**: Defines routes for cryptocurrency-related endpoints.
    - **stockRoutes.js**: Defines routes for stock-related endpoints.
  - **services/**: Contains services for interacting with external APIs.
    - **cryptoService.js**: Interacts with the cryptocurrency API.
    - **stockService.js**: Interacts with the stock API.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd crypto-stock-analysis/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `backend` directory and add your API keys for the cryptocurrency and stock APIs.

4. **Run the Application**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

- **Cryptocurrency Data**
  - `GET /api/crypto`: Fetches the list of cryptocurrencies and their information.

- **Stock Data**
  - `GET /api/stocks`: Fetches the list of stocks and their information.

## Docker

To run the backend service using Docker, ensure you have Docker installed and run:

```bash
docker-compose up
```

This will build and start the backend service in a container.

## License

This project is licensed under the MIT License.