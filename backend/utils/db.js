import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://202312048:Kr12345678@cluster0.jwkxp4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log("not");
    }
}
export default connectDB; 