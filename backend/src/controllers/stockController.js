class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }

    async getStocks(req, res) {
        try {
            const stocks = await this.stockService.fetchStocks();
            res.status(200).json(stocks);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching stock data', error: error.message });
        }
    }
}

export default StockController;