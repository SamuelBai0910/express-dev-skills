var express = require('express');
var router = express.Router();
var listsController = require('../controllers/lists');

/* GET lists. */
router.get('/', listsController.index);
// Get /lists/add  <--Define BEFORE show route
router.get('/new', listsController.new);
// Get /lists/:id
router.get('/:id', listsController.show);
// Post /lists
router.post('/', listsController.create);
// Delete /lists/:id
router.delete('/:id', listsController.delete);

module.exports = router;
