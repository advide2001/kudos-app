import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();
  console.log(userId);
  console.log(user);
  return <h1>Hello World</h1>;
}
