const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route1 = require('./routes/upload');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting the routes
app.set('view engine', 'ejs'); 

// Routes
app.use('/', route1);

app.listen(80, () => console.log('listening on http://localhost'));