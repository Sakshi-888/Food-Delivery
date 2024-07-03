import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://sakshi:Adi170421@cluster0.viqtjer.mongodb.net/food-del').then(()=>console.log("DB Connected") );
   
}
