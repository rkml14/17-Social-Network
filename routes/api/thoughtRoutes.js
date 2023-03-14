const router = require('express').Router();

const {
  getAllThoughts,
  getSingleThought,
  createThought,
  // updateSingleThought,
  deleteSingleThought,
  // createReaction,
  // deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/')
.get(getAllThoughts)
.post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
// .post(updateSingleThought)
.delete(deleteSingleThought);

// /api/thoughts/:thoughtId/reactions
// route.route('/:thoughtId/reactions/:reactionId')
// .post(createReaction)
// .delete(deleteReaction);


module.exports = router;
