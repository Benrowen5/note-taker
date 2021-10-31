const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// initialize app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware functions
// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({extended:true}));
// make static resources readily available
app.use(express.static('public'));

// use apiRoutes when client navigates to /api endpoint
app.use('/api', apiRoutes);
// use htmlRoutes if / is the endpoint
app.use('/', htmlRoutes);

// start server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
