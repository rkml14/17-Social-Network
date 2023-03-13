const { Thought, Reaction } = require('../models');

module.exports = {
    //POST reactiong stored in single thought's reactions array field
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true }
        )
            .then((Thought) =>
                !Thought
                    ? res
                        .status(404)
                        .json({ message: 'Reaction created, but no Thoughts with this ID' })
                    : res.json({ message: 'Reaction created' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
    //Delete to pull and remove reaction by reactionID value 
    deleteReaction(req, res) {
        Reaction.findOneAndDelete({ _id: req.params.reactionId })
            .then((reaction) =>
                !reaction
                    ? res.status(404).json({ message: 'No Reaction with that ID' })
                    : Reaction.deleteMany({ _id: { $in: username.reactions } })
            )
            .catch((err) => res.status(500).json(err));
    },
};
