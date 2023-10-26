const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create: create,
    index: index,
  };

  async function index(req, res) {
    try {
      const flightList = await Flight.find({});
      res.render('flights/index', { flightList, errorMsg: '' });
    } catch (error) {
      // Handle any potential errors here
      res.status(500).send('An error occurred');
    }
  };
  

function newFlight(req, res) {
  res.render('flights/new', { errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove any whitespace at start and end of cast
  req.body.cast = req.body.cast.trim();
  // split cast into an array if it's not an empty string - using a regular expression as a separator
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  try {
    await Flight.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the flights index after we implement it
    res.redirect('/flights/index');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}