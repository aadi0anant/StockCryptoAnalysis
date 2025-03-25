const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { setCryptoRoutes } = require('./routes/cryptoRoutes');
const { setStockRoutes } = require('./routes/stockRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

setCryptoRoutes(app);
setStockRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});