const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: [{}],
        reactionBody: [{type: String, required: true, maxLength: 280}],
        username: [{type: String, required: true}],
        createdAt: [{type: Date, default: Date.now, getters: true}]
    },
);

module.exports = reactionSchema;