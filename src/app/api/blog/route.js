import { Blog } from "@/models/blog";
import connectDB from "@/utils/database";

export async function POST(request) {
  await connectDB();
  const { title, date, type, img, fName, avatar } = await request.json();
  try {
    const blog = new Blog({ title, date, type, img, fName, avatar });
    await blog.save();
    return Response.json({
      data: { title, date, type, img, fName, avatar },
      message: "Post successfully created",
    });
  } catch (error) {
    console.log(error);
  }
}
export async function GET() {
    await connectDB();
    try {
      const users = await Blog.find();
      return Response.json(users, { status: 201 });
    } catch (error) {
      return Response.json("Get all users failed", { status: 401 });
    }
  }