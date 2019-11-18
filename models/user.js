/** * 用户信息 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  // name: { type: String, default: '' },
  // email: { type: String, default: '' },
  username:{},
  token:{},
  vcode:{},
  password:{}
});
module.exports = mongoose.model('User', UserSchema);
