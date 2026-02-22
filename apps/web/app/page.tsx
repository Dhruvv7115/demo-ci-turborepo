import { client } from '@repo/db/client'
export default async function page() {
  const user = await client.user.findFirst();
  console.log(user);
  return (
    <div>
      <h1>User Info:</h1>
      <div>username: {user?.username}</div>
      <div>password: {user?.password}</div>
    </div>
  )
}
