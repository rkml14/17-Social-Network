// const User = require('./User');
// const Thought = require('./Thought');
// const Reaction = require('./Reaction');

// module.exports = { User, Thought, Reaction };


const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require ('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;