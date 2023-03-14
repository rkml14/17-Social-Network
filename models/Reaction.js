const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: [{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        }],
        reactionBody: [{ type: String, required: true, maxLength: 280 }],
        username: [{ type: String, required: true }],
        createdAt: [{ type: Date, default: Date.now, }]
    },
    {  
        toJSON: {
        getters: true,
    },
    id: false,
    }
);

//may not need line 15 
// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;