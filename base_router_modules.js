var express = require('express');
var router = express.Router();

var emp = require('./employee_route_controller_mapping');
router.use('/employee', emp);

module.exports = router;