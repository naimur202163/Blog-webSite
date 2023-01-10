import mongoose from "mongoose";

export const connection = async () => {
  const URL = `mongodb://localhost:27017/Blog`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });

    console.log(`Mongose Db Conneced successuly`);
  } catch (error) {
    console.log(`Mongodb is not connected `, error);
  }
};

export default connection;
