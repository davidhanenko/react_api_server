const express = require('express');
const cors = require('cors');


const app = express();


const data = require('../src/mock-data/characters-all.json');

app.get('/', cors(), (req, res)=> {
  res.json(data);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));