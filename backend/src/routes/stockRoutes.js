const express = require('express');
const StockController = require('../controllers/stockController');

const setStockRoutes = (app) => {
    const router = express.Router();
    const stockController = new StockController();

    router.get('/stocks', stockController.getAllStocks.bind(stockController));
    router.get('/stocks/:symbol', stockController.getStockBySymbol.bind(stockController));

    app.use('/api', router);
};

module.exports = setStockRoutes;