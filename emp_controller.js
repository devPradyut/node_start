
var empCtrl = {
    a: function(req,res) {
        res.send({abc: "it is a fn", b: req.params.id});
    },
    b: function(req,res) {
        res.send({abc: "it is b fn"});
    }
}

module.exports = empCtrl;