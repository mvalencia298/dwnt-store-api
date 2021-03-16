const express = require('express');
// Require routes
const clienteRoutes = require('./routes/cliente.routes')
const cdRoutes = require('./routes/cd.routes')
const alquilerRoutes = require('./routes/alquiler.routes')
const sancionRoutes = require('./routes/sancion.routes')
const detalleAlquilernRoutes = require('./routes/detalle-alquiler.routes')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Store-api");
});
// using as middleware
app.use('/store/cliente', clienteRoutes)
app.use('/store/cd', cdRoutes)
app.use('/store/alquiler', alquilerRoutes)
app.use('/store/sancion', sancionRoutes)
app.use('/store/detalle-alquiler', detalleAlquilernRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});