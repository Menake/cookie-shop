import type { NextPage } from 'next'
import { trpc } from "@/utils/trpc"

const Home: NextPage = () => {
  const message = trpc.useQuery(['test.get']);

  if (!message.data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Indie's Cookies
      </h1>
      <p className='text-red-500'>{message.data.greeting}</p>
    </div>
  )
}

export default Home
