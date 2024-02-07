const express = require('express');
const translate = require('./src/handleTranslate.js');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.text());

const port = process.env.PORT | 3000

app.post('/', (req, res) => {
    const result = translate(req.body)
    res.send(result)
});

app.listen(port)
console.log(`listening on port ${port}`)