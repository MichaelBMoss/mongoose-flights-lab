const Flight = require('../models/flight');

module.exports = {
    create: create,
  };

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.destination.push(req.body);
      try {
      await flight.save();
    } catch (err) {
      console.log(err);
    }
  res.redirect(`/flights/${flight._id}`);
  }
