import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rithishsatish:gNGnqCMmnfduxm49@samplecluster.m0gmtgy.mongodb.net/shopy");
    console.log("Connected To MongoDB");
  } catch (err) {
    console.log("DB Disconnected");
    process.exit(1);
  }
};

export default connectDB;


