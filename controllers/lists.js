const List = require('../models/list');

module.exports = {
  index,
  show
};

function show (req, res) {
  res.render('lists/show', {
    list: List.getOne(req.params.id)
  });
}

function index (req, res) {
  res.render('lists/index', {
    lists: List.getAll()
  });
}

