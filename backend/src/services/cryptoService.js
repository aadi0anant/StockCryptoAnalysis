class CryptoService {
    constructor() {
        this.apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
        this.defaultParams = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
        };
    }

    async fetchCryptoData() {
        try {
            const response = await fetch(`${this.apiUrl}?${new URLSearchParams(this.defaultParams)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return this.formatCryptoData(data);
        } catch (error) {
            console.error('Error fetching cryptocurrency data:', error);
            throw error;
        }
    }

    formatCryptoData(data) {
        return data.map(coin => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            currentPrice: coin.current_price,
            marketCap: coin.market_cap,
            priceChangePercentage24h: coin.price_change_percentage_24h,
            totalVolume: coin.total_volume,
        }));
    }
}

export default CryptoService;