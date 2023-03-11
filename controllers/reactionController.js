const { Thought, Reaction } = require('../models');

module.exports = {
    createReaction(req, res) {
        Reaction.find()
        .then((reaction) => res.json(reaction))
        .catch((err) => res.status(500).json(err));
    },
deleteReaction(req, res) {
    Reaction.
}




}