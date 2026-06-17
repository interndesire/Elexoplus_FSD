import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/auth-db`)
        console.log("connected to DB sucessfully",connectionInstance.connection.host)
    } catch (error) {
        console.error("Failed to connect DB", error)
        process.exit(1)
    }
}

export default connectDB;