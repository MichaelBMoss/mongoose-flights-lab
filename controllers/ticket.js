const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create: create,
  };

  async function create(req, res) {
    try {
      const newTicket = await Ticket.create(req.body);
      const flight = await Flight.findById(req.params.id);
      flight.tickets.push(newTicket._id);
      await flight.save();
      res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
      console.error(err);
      res.render(`flights/${req.params.id}`, { errorMsg: err.message });
    }
  }
  