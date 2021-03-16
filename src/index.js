const express = require('express');
const bodyParser = require('body-parser');
// Require employee routes
const clienteRoutes = require('./routes/cliente.routes')
const cdRoutes = require('./routes/cd.routes')
const alquilerRoutes = require('./routes/alquiler.routes')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// using as middleware
app.use('/api/v1/cliente', clienteRoutes)
app.use('/api/v1/cd', cdRoutes)
app.use('/api/v1/alquiler', alquilerRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});