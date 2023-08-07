import mongoose from "mongoose";

mongoose.connection.on('open', () => 
console.log('MongoDB connected'))

async function connectDb ( { dbUri }) {
    const uri = dbUri
    await mongoose.connect(uri, {
        useNewUrlParser: true })
}

export default connectDb
