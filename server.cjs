const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = express();
const port = 8000;

const jsonParser = bodyParser.json()

api.use(cors());

api.post('/robot', jsonParser, (req, res) => {
    const robot = req.body;
    console.log('Robot data:', robot);
    res.status(200).json(robot);
});

api.listen(port, () => {  
    console.log('Server runned');
});
