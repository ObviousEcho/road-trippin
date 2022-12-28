const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
    tripname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    posts: [
        {
        type: Schema.Types.ObjectId,
        ref: "Post",
    },
    ],
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;