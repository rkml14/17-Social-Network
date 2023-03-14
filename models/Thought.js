const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Reaction = require('./Reaction');

//Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: [{ type: String, required: true, minLength: 1, maxLength: 280 }],
        createdAt: [{ type: Date, default: Date.now, getters: true }],
        username: [{ type: String, required: true }],
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }

);

//virtual reactionCount to retrieve length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

