// npm install 

const express = require('express');
const HTMLroutes = require('./routes/html.js');
const apiRoutes = require('./routes/api.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Use APPs
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', HTMLroutes);
app.use('/api', apiRoutes);
app.listen(PORT, () =>{
    console.log(`API server now on ${PORT}!`);
});