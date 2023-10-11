// server.js
const express = require('express');
const reservationRoutes = require('./reservationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
