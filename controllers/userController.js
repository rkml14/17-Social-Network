const { User, Thought } = require('../models');
// const User = require('../models/User');

module.exports = {
    //GET all users
    getAllUsers(req, res) {
        User.find()
            .then((username) => res.json(username))
            .catch((err) => res.status(500).json(err))
    },
    
    // GET single user by its _id  TODO NEED TO POPULATE THOUGHT AND FRIEND DATA 
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.usernameId })
        .select('-__v')
        .populate('thoughts')
        .populate('friends')
            .then((username) =>
                !username
                    ? res.status(404).json({ message: 'No username with that id' })
                    : res.json(username)
            )
            .catch((err) => res.status(500).json(err));
    },

    // POST a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },

    // UPDATE a new user
    updateUser(req, res) {
        User.create(req.body)
            .then((username) => {
                return User.findOneAndUpdate(
                    { _id: req.body.user._id },
                    { $addToSet: { users: username._id } },
                    { new: true }
                );
            })
            .then((username) =>
                !username
                    ? res.status(404).json({ message: 'Username not created' })
                    : res.json({ message: 'Username created 🎉' })
            )
            .catch((err) => {
                console.error(err);
                res.status(500).json(err);
            });
    },
    // DELETE a user by its _id BONUS: removed a user's associated thoughts when deleted
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.usernameId })
            .then((username) =>
                !username
                    ? res.status(404).json({ mesage: 'No username with that ID' })
                    : Thought.deleteMany({ _id: { $in: username.thoughts } })
            )
            .then(() => res.json({ message: 'Username and associated thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    // TODO POST a new friend to user's friend list
    // newFriend(req, res) {

    // },

    // TODO DELETE friend from user's friend list
    // deleteFriend(req, res) {

    // },
};








