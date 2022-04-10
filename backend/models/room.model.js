const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
    roomName: String,
    roomMembers: [String],
    roomOwner: String,
    roomPlaylist: String,
    isPasswordProtected: Boolean,
    roomPassword: String
});

module.exports = mongoose.model("Rooms", roomSchema);