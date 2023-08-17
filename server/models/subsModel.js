const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://MongoJeremyW:kI17sHJ3AiWiQTxS@cluster0.zsxks6o.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'subscriptions'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

const subSchema = new Schema({
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  startMonth: {type: Number, required: true},
  endMonth: {type: Number, required: true},
});

const User = mongoose.model('user', userSchema);
const Sub = mongoose.model('sub', subSchema);

module.exports = {User, Sub};