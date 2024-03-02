export async function CreateNewPost({ title, date, type, img, fName, avatar }) {
  const newPost = {
    title: title,
    type: type,
    img: img,
    fName: fName,
    avatar: avatar,
    date: date,
  };

  const data = await fetch(`http://localhost:3000/api/blog`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
}
