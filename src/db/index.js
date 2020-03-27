import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/jupiter', { useNewUrlParser: true });
  } catch (error) {
    console.log(error.msg);
  }
}

connect();

const db = mongoose.connection;

export default db;