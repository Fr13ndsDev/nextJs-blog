import { Blog } from "@/models/blog";
import connectDB from "@/utils/database";

export async function GET(request, { params }) {
  await connectDB();
  try {
    const id = params.id;
    const blog = await Blog.findById(id);
    if (!blog.id)
      return Response.json("User is not defined with this id", { status: 501 });
    return Response.json(blog, { status: 201 });
  } catch (error) {
    return Response.json("Get all users failed", { status: 401 });
  }
}
export async function DELETE(request, { params }) {
  await connectDB();
  try {
    const id = params.id;
    await Blog.deleteOne({ _id: id });

    return Response.json("User successfully deleted", { status: 201 });
  } catch (error) {
    return Response.json("Get one user  failed", { status: 401 });
  }
}
export async function PATCH(request, { params }) {
  await connectDB();
  const { title, date, type, img, fName, avatar } = await request.json();
  try {
    const id = params.id;
    const blog = await Blog.findById(id);
    blog.title = title;
    blog.date = date;
    blog.type = type;
    blog.img = img;
    blog.fName = fName;
    blog.avatar = avatar;
    await blog.save();

    return Response.json("User successfully edited", { status: 201 });
  } catch (error) {
    return Response.json("Get one user  failed", { status: 401 });
  }
}

