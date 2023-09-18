export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      cache: "reload",
      redirect: "manual",
      integrity: "integrity",
    }
  );
  // if (!res.ok) throw new Error("failed to fetch user");
  if (!res.ok) undefined;

  return res.json();
}
