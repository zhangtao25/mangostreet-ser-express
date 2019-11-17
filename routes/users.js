var express = require('express');
var router = express.Router();

var User = require('./../models/user')

/* GET users listing. */
router.post('/v', function(req, res, next) {
  let username = req.body['username'];
  let vcode = req.body['vcode'];

  let reg = new RegExp("^" + username);

  function insert(res) {
    let user = new User({
      username:username,
      vcode:vcode,
      password:""
    });
    user.save(function (err, result) {
      if (err) {
        res.send("插入失败")
      } else {
        res.send("插入成功")
      }
    });
  }

  User.find({"username": reg},function (err, docs) {
    if (docs.length === 0){
      insert(res)
    } else {
      res.send("已经有啦！")
    }

  });






});

module.exports = router;
