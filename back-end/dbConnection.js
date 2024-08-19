const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://b221021:msHKgsvTkMcU9ipv@bookmyshow.zmt0n.mongodb.net/');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;