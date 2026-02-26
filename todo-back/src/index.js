const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../..', '.env') });
const mongoose = require('mongoose');
const app = require('./server');

const connectionUrl = process.env.MONGO_STRING;
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
