import { client } from '@repo/db/client'
export default async function page() {
  const user = await client.user.findFirst();
  console.log(user);
  return (
    <div>
      <div>{user?.username}</div>
      <div>{user?.password}</div>
    </div>
  )
}
