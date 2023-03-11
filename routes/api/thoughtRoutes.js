const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteSingleThought,
  updateSingleThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).post(updateSingleThought).delete(deleteSingleThought);

module.exports = router;
