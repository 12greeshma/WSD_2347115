// app.js
const express = require('express');
const reservationRoutes = require('./src/routes/reservationRoutes');

const app = express();

app.use(express.json());
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
