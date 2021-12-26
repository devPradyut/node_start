const exprss = require('express');
const router = exprss.Router();
const empCtrl = require('./emp_controller');

router.get('/a/:id', empCtrl.a);
router.post('/b', empCtrl.b);

module.exports = router;