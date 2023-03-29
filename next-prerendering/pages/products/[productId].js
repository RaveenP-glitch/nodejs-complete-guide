import React from 'react'
import { useRouter } from 'next/router'

function Products({ product }) {

    const router = useRouter();

    if(router.isFallback){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h2>{product.id} {product.title}</h2>
        <p>{product.body}</p>
    </div>
  )
}

export default Products

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: { productId: '1'}
            },
            {
                params: { productId: '2'}
            },
            {
                params: { productId: '3'}
            },
            {
                params: { productId: '4'}
            },
            {
                params: { productId: '5'}
            },
        ],
        fallback: true,
    }
}


export async function getStaticProps(context){
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`);
    const data = await response.json();

    return {
        props:{
            product:data,
        }
    }
}