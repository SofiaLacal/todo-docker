const path = require('path');
const fs = require('fs');

// Load .env from parent when running locally; in Docker use env vars from compose
const envPath = path.join(__dirname, '../..', '.env');
if (fs.existsSync(envPath)) {
    require('dotenv').config({ path: envPath });
}

const mongoose = require('mongoose');
const app = require('./server');

const connectionUrl = process.env.MONGO_STRING || 'mongodb://localhost:27017';
const dbName = 'to-do-list';
const PORT = process.env.PORT_BACK || process.env.PORT || 8889;

mongoose
    .connect(connectionUrl, { dbName })
    .then(() => {
        console.log('DB conectada');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    })
    .catch((err) => {
        console.error('Error conectando a la DB:', err);
        process.exit(1);
    });
