import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  date: String,
  type: String,
  img: String,
  fName: String,
  avatar: String,
}); 

export const Blog = models.Blog || mongoose.model("Blog", BlogSchema);
