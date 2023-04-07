import Head from 'next/head'
import Image from 'next/image'
import Header from '@component/components/Header'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className=''>
    <Head>
      <title>Medium Blog</title>
      <link rel="icon" href='/favicon.ico'></link>
    </Head>

    <h1>This is Medium 2.0</h1>
    <Header/>

   </div>
  )
}
