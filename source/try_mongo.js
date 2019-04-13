/*
/ SET MONGO_HOST = 18.224.150.177
*/

const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  const error = require('dotenv').config();
  console.log(error)
}

const mongo_host     = process.env.MONGO_HOST || 'localhost';
const mongo_password = process.env.MONGO_PWRD;

console.log('mongo_host =>', mongo_host);

const options = { useNewUrlParser : true };
var connectionString = `mongodb://admin:${mongo_password}@${mongo_host}:27017/site`;

connect(connectionString);

async function connect(url) {
  try 
  {
    await mongoose.connect(connectionString, options);

    console.log('after connect');
    const UsersSchema = new mongoose.Schema({}, { strict: false });
    const User = mongoose.model('Product', UsersSchema, 'users');

    const result = await User.findOne( { name : 'mauricio'} );
    console.log(result);
  }
  catch (error) 
  {
    console.log('catch error :', error.errmsg);
    console.log();
  }
}


// Connected handler
mongoose.connection.on('connected', async function (err) {
  console.log("Connected to DB using chain: " + connectionString);
});


// Error handler
/*
mongoose.connection.on('error', function (err) {
  console.log('error event');
});
*/

/*
// Reconnect when closed
mongoose.connection.on('disconnected', function () {
  console.log('try reconnect')
   mongoose.connection.connectToDatabase();
});
*/
