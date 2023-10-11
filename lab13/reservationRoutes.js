// reservationRoutes.js
const express = require('express');
const router = express.Router();
const reservationController = require('./reservationController');

router.get('/available-rooms', (req, res) => {
  const { checkInDate, checkOutDate, roomType, occupancy } = req.query;

  reservationController.searchAvailableRooms(checkInDate, checkOutDate, roomType, occupancy)
    .then((availableRooms) => {
      res.json({ availableRooms });
    })
    .catch((error) => {
      console.error('Error searching for available rooms: ', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports = router;
