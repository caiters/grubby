const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const routes = require('./api/routes/grubbyRoutes');

routes(app);
app.listen(port);

console.log(`grubby API server started on ${port}`);