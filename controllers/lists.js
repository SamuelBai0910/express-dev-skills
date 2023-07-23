const List = require('../models/list');

module.exports = {
  index,
  show
};

function show (req, res) {
  res.render('lists/show', {
    list: List.getOne(req.params.id),
    title: "Details of things"
  });
}

function index (req, res) {
  res.render('lists/index', {
    lists: List.getAll(),
    title: "Things Lists"
  });
}

