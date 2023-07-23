var express = require('express');
var router = express.Router();
var listsController = require('../controllers/lists');

/* GET lists. */
router.get('/', listsController.index);
// Get /todos/:id
router.get('/:id', listsController.show);

module.exports = router;
