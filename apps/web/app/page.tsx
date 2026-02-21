import { client } from '@repo/db/client'
export default async function page() {
  const user = await client.user.findFirst();
  console.log(user);
  return (
    <div>
      <div>username: {user?.username}</div>
      <div>password: {user?.password}</div>
    </div>
  )
}
