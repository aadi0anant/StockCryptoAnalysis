class StockService {
    constructor() {
        this.apiUrl = 'https://api.example.com/stocks'; // Replace with actual stock API URL
    }

    async fetchStockData() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return this.formatStockData(data);
        } catch (error) {
            console.error('Error fetching stock data:', error);
            throw error;
        }
    }

    formatStockData(data) {
        // Format the stock data as needed
        return data.map(stock => ({
            symbol: stock.symbol,
            name: stock.name,
            price: stock.price,
            change: stock.change,
            volume: stock.volume
        }));
    }
}

export default StockService;