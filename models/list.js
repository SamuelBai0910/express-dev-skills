const lists = [
  {id: 125223, list: 'Learn English', finished: false},
  {id: 127904, list: 'Weekly Shopping', finished: false},
  {id: 139608, list: 'Do exercise', finished: true}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  id = parseInt(id);
  const idx = lists.findIndex(list => list.id === id);
  lists.splice(idx, 1);
}

function create(list) {
  list.id = Date.now() % 1000000;
  list.finished = false;
  lists.push(list);
}

function getOne(id) {
  id = parseInt(id);
  return lists.find(list => list.id === id);
}

function getAll() {
  return lists;
}