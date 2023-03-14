const { Thought, User } = require('../models');

module.exports = {
    //GET all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err))
    },

    // GET single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thoughtId) =>
                !thoughtId
                    ? res.status(404).json({ message: "No thought found with that id" })
                    : res.json(thoughtId)
            )
            .catch((err) => res.status(500).json(err));
    },



    // POST a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                //push the created thought's _id to the associated user's thoughts array
                return User.findOneAndUpdate(
                    { users: req.params.userId },
                    { $push: { thoughts: user._id } },
                    { new: true }
                )
                .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({ message: 'Thought created! 🎉' })
            )
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    })

},
};
        // .then((user) =>
        //     !user
        //         ? res.status(404).json({
        //             message: 'Thought created, but no user found with that ID',
        //         })
        //         : res.json('Created the thought 🎉')
        // )
        // .catch((err) => {
        //     console.log(err)
        //     res.status(500).json(err)


           



// updateSingleThought

// deleteSingleThought(req, res) {
//     Thought.findOneAndRemove({ _id: req.params.thoughtId })
//         .then((thought) =>
//             !thought
//                 ? res.status(404).json({ message: 'no Thought with that id!' })
//                 : Thought.findOneAndUpdate(
//                     { user: req.params.thoughtId },
//                     { $pull: { user: req.params.thoughtId } },
//                     { new: true }
//                 )
//         )
//         .then((thought) =>
//             !thought ? res
//                 .status(404)
//                 .json({ message: 'Thought create but no user with that id!' })
//                 : res.json({ message: 'Thought successfully deleted!' })
//         )
//         .catch((err) => res.status(500).json(err));
// },
// };





