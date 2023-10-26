const Movie = require('../models/movie');

module.exports = {
    new: newMovie,
    create: create,
    index: index,
  };

  async function index(req, res) {
    try {
      const movieList = await Movie.find({});
      res.render('movies/index', { movieList, errorMsg: '' });
    } catch (error) {
      // Handle any potential errors here
      res.status(500).send('An error occurred');
    }
  };
  

function newMovie(req, res) {
  res.render('movies/new', { errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove any whitespace at start and end of cast
  req.body.cast = req.body.cast.trim();
  // split cast into an array if it's not an empty string - using a regular expression as a separator
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  try {
    await Movie.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/movies/index');
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('movies/new', { errorMsg: err.message });
  }
}