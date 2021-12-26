var express = require('express');
var router = express.Router();

// Module routing

/**
 * Employee Module connection
 */
var emp = require('./controller/emp/router');
router.use('/employee', emp);

/**
 * Student Module connection
 */

module.exports = router;