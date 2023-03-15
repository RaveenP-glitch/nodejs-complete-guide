import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.replace("/product");
  }


  return (
    <div>
    <h1>Home Page</h1>
    <Link href="/blogs">
    Blog
    </Link>
    <br></br>
    <Link href="/product">
    Product
    </Link>
    <br></br>
    <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default Home