const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  // updateSingleThought,
  // deleteSingleThought,
  // createReaction,
  // deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
// .post(updateSingleThought)
// .delete(deleteSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/:reactionId')
// .post(createReaction)
// .delete(deleteReaction);


module.exports = router;
