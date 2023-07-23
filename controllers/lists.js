const List = require('../models/list');

module.exports = {
  index,
  show,
  new: AddNew,
  create,
  delete: removeList
};

function removeList(req, res) {
  List.deleteOne(req.params.id); 
  res.redirect('/lists');
}

function create(req, res) {
  // console.log(req.body);
  List.create(req.body);
  res.redirect('/lists');
}

function AddNew (req, res) {
  res.render('lists/new', { title: 'New Things' });
} 

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

