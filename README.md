# Crypto and Stock Analysis Project

This project is a web application that aggregates cryptocurrency and stock data from public APIs and presents it in a visually appealing dashboard. The application consists of a backend service that fetches data from the APIs and a frontend service that displays the data.

## Project Structure

```
crypto-stock-analysis
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── cryptoController.js
│   │   │   └── stockController.js
│   │   ├── routes
│   │   │   ├── cryptoRoutes.js
│   │   │   └── stockRoutes.js
│   │   └── services
│   │       ├── cryptoService.js
│   │       └── stockService.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── CryptoAnalysis.js
│   │   │   └── StockAnalysis.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── main.css
│   ├── package.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Features

- **Crypto Analysis Page**: Displays a list of cryptocurrencies along with their relevant information.
- **Stock Analysis Page**: Displays a list of stocks along with their relevant information.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React
- **Containerization**: Docker, Docker Compose

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd crypto-stock-analysis
   ```

2. **Run the Application**:
   Use Docker Compose to build and run the application:
   ```
   docker-compose up
   ```

3. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000` to view the dashboard.

## API Endpoints

- **Cryptocurrency Data**: Accessed through the backend service, which fetches data from a cryptocurrency API.
- **Stock Data**: Accessed through the backend service, which fetches data from a stock API.

## Contribution

Feel free to contribute to this project by submitting issues or pull requests. 

## License

This project is licensed under the MIT License.