const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

var base_router_module = require('./base_router_modules');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use((req, res, next) => {
    console.log('Time: ', Date.now());

    next();
});
  
app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
}); 

app.use('/api', base_router_module);

app.listen(3000, () => console.log('Example app is listening on port 3000.'));