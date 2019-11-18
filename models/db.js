const mongoose = require('mongoose');
const DB_URL = 'mongodb://114.55.145.3:27017/mangostreet';


mongoose.connect(DB_URL);
/** * 连接成功 */

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DB_URL);
});
/** * 连接异常 */
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
/** * 连接断开 */

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
