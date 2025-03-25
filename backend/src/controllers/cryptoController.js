class CryptoController {
    constructor(cryptoService) {
        this.cryptoService = cryptoService;
    }

    async getCryptocurrencies(req, res) {
        try {
            const data = await this.cryptoService.fetchCryptocurrencies();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching cryptocurrency data', error: error.message });
        }
    }

    async getCryptocurrency(req, res) {
        const { id } = req.params;
        try {
            const data = await this.cryptoService.fetchCryptocurrencyById(id);
            if (!data) {
                return res.status(404).json({ message: 'Cryptocurrency not found' });
            }
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching cryptocurrency data', error: error.message });
        }
    }
}

export default CryptoController;