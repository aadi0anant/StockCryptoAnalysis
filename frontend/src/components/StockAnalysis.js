import React, { useEffect, useState } from 'react';

const StockAnalysis = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/stocks'); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Failed to fetch stocks');
                }
                const data = await response.json();
                setStocks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchStocks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Stock Analysis</h1>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <tr key={stock.symbol}>
                            <td>{stock.symbol}</td>
                            <td>{stock.name}</td>
                            <td>{stock.price}</td>
                            <td>{stock.change}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockAnalysis;