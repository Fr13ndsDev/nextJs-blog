export async function getAllUser() {
  const data = await fetch(`http://localhost:3000/api/blog`);
  const response = await data.json();
  return response;
}

export async function getSinglePost(id) {
  const data = await fetch(`http://localhost:3000/api/blog/${id}`);
  const response = await data.json();
  return response;
}
