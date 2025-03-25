const express = require('express');
const CryptoController = require('../controllers/cryptoController');

const setCryptoRoutes = (app) => {
    const router = express.Router();
    const cryptoController = new CryptoController();

    router.get('/cryptocurrencies', cryptoController.getAllCryptocurrencies.bind(cryptoController));
    router.get('/cryptocurrency/:id', cryptoController.getCryptocurrencyById.bind(cryptoController));

    app.use('/api/crypto', router);
};

module.exports = setCryptoRoutes;