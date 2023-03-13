const { Thought, User } = require('../models');

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
                    ? res.status(404).json({ message: "No thought found with that id" })
                    : res.json(thoughtId)
            )
            .catch((err) => res.status(500).json(err));
    },
    //POST a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                //push the created thought's _id to the asoociated user's thoughts array
                return User.findOneAndUpdate(
                    { $push: { thoughts: thought._id } }
                ),
                    { new: true }
            })

            //based this on module 21 postController DOMINIQUE 
            // .then((dbThoughtData) => res.json(dbThoughtData))

            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'Thought created, but no user found with that ID',
                    })
                    : res.json('Created the thought 🎉')
            )
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            });
    },
    // updateSingleThought,

    deleteSingleThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'no Thought with that id!' })
                    : User.findOneAndUpdate (
                        {user: req.params.usernameId},
                        {$pull: {user: req.params.usernameId}},
                        {new: true}
                    )
                )
            .catch((err) => res.status(500).json(err));
    },
};





