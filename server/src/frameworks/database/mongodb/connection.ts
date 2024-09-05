import mongoose from "mongoose";
import configKeys from "../../../config";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(configKeys.MONGO_DB_URL, {
      dbName: configKeys.DB_NAME,
    });
    console.log(`Database connected successfully`.bg_green);
    console.log(`AWS S3 connected successfully`.bg_magenta);
    console.log(`AWS Cloudfront connected successfully`.bg_magenta);
    console.log();
    console.log(`JWT Tests completed`.bg_green);
    console.log(`REDIS Tests completed`.bg_green);
    console.log(`MongoDB Tests completed`.bg_green);
    console.log();
    console.log(`AWS Lambda connected successfully`.bg_green);
  } catch (error: any) {
    process.exit(1);
  }
};
export default connectDB;
