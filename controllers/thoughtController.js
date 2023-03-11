const { Thought } = require('../models');

module.exports = {
    //GET all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },
    //GET single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thoughtId) =>
                !thoughtId
                ? res.status(404).json( {message: "No thought found with that id"})
                : res.json(thoughtId)
            )
            .catch((err) => res.status(500).json(err));
    },
    //POST a new thought
    createThought(req,res) {
        Thought.create(req.body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
};






// deleteSingleThought,
// updateSingleThought,