const Flight = require('../models/flight');

module.exports = {
    create: create,
  };

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  if (flight.destination.length === 0) {
  flight.destination.push(req.body);
  console.log('it was 0');
  }
      try {
      await flight.save();
    } catch (err) {
      console.log(err);
    }
  res.redirect(`/flights/${flight._id}`);
  }
