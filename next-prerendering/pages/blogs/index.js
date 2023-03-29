import React from 'react'
import Link from 'next/link'

function BlogList({ blogs }) {
  return (
    <div>
        <h1>List of Blog posts.</h1>
        <br/>
        {
        blogs.map((blog) => {
            return(
                <div key={blog.id}>
                    <hr/>
                    <br/>
                    <Link href={`/blogs/${blog.id}`} passHref>
                    <p>{blog.id} {blog.title}</p>
                    </Link>
                    <br/>
                </div>
                
            )
        })
         }
        <hr/>
    </div>
  )
}

export default BlogList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()

    return {
        props :{
            blogs:data
        }
    }
}