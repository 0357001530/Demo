import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://babanguyen325_db_user:nguyenthenam1411@cluster0.d3018ru.mongodb.net/food-del').then(() => console.log("DB Connected"));
}
