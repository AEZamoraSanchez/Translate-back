const express = require('express');
const translate = require('./src/handleTranslate.js');
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.text());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  
const port = process.env.PORT | 3000

app.post('/', async (req, res) => {
    const result = await translate(req.body)
    res.send(result)
});

app.listen(port)
console.log(`listening on port ${port}`)