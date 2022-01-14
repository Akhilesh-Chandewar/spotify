import Head from 'next/head'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <div className="flex">
        <Head>
          <title>Akhil's Personal Spotify</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar />
        <Center />
      </div>
    </div>
  )
}
