import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <h2>Users</h2>
      </Link>
      <Link href="/posts">
        <h2>Posts</h2>
      </Link>
      <Link href="/blogs">
        <h2>Blogs</h2>
      </Link>
      <Link href="/products">
        <h2>Products</h2>
      </Link>
    </div>
  )
}

export default Home