const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const product = require('./routes/product')
const buyproduct = require('./routes/buyProduct')
const sellproduct = require('./routes/sellProduct')
const kpi = require('./routes/kpiRoute')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use('/api/product', product);
app.use('/api/buyproduct', buyproduct);
app.use('/api/sellproduct', sellproduct);
app.use('/api/kpi', kpi);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(3000, () => {
            console.log('Connected to db and App listening on port 3000!');
        });
    })
    .catch((err) => { console.log(err) })

