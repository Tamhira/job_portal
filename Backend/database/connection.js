import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Job_Portal"
    }).then(()=>{
        console.log("Connected to database")
    }).catch((err)=>{
        console.log(`An error occurred while connecting to the database: ${err}`)
    })
}