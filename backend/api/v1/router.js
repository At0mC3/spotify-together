const router = require('express').Router();

// Import of the endpoints
const roomRoute = require('./room.route');
router.use('/room', roomRoute);

module.exports = router;