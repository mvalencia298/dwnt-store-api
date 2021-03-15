const express = require('express');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const clienteRoutes = require('./routes/cliente.routes')
// using as middleware
app.use('/api/v1/cliente', clienteRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});