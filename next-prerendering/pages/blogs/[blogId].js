import React from 'react'

function SingleBlog({ blog }) {
  return (
    <div>
      <h1>Blog Post {blog.id}</h1>
      <br/>
      <h2>{blog.title}</h2>
      <br/>
      <p>{blog.body}</p>
    </div>
    

  )
}

export default SingleBlog

export async function getStaticPaths(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()

  const paths = data.map((blog) =>{
    return{
      params:{
        blogId:`${blog.id}`
      }
    }
  })

  return{
      // paths:[
      //     {
      //         params: { blogId: '1'}
      //     },
      //     {
      //         params: { blogId: '2'}
      //     },
      //     {
      //         params: { blogId: '3'}
      //     },
      //     {
      //         params: { blogId: '4'}
      //     },
      //     {
      //         params: { blogId: '5'}
      //     },
      // ],
      paths,
      fallback: false,
  }
}


export async function getStaticProps(context){
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
  const data = await response.json()

  return{
    props: {
      blog: data
    }
  }
}