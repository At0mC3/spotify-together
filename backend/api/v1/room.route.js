const router = require('express').Router();
const roomModel = require('../../models/room.model');

router.post('/', async (req, res) => {
    const { username, roomName } = req.body;

    const newRoom = new roomModel({
        //
    });

    const savedRoom = await newRoom.save();
    if(savedRoom.isError) {

    }
    const data = savedRoom.data;

    // savedRoom._id
    if(!username || !roomName) {
        res.status(400);
        res.json({
            status: 'error',
            msg: "The request is missing fields"
        })
    }

    res.json({
        roomId: savedRoom._id
    });
});

// url/api/v1/room

// const roomModel = require('../../models/room.model');

// const room = new roomModel({
//     roomName: "lol",
//     roomMembers: ["At0mC3"],
//     roomOwner: "At0mC3",
//     roomPlaylist: null,
//     isPasswordProtected: false,
//     roomPassword: null
// });
// room.save();

// const room = roomModel.findOne({roomName: "xd"});
// if(!room) {
//     return error;
// }

module.exports = router;