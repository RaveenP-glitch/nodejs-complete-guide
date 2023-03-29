import React from 'react'
import Link from 'next/link'

function ProductList({ products }) {
  return (
   <>
    <h1>List of Products</h1>
    <br></br>
    {
        products.map((product) => {
            return(
                <div key={product.id}>
                    <Link href={`products/${product.id}`} passHref>
                        <h2>{product.id} {product.title}</h2>
                    </Link>
                    <hr/>
                </div>
            )
        })
    }

   </>
  )
}

export default ProductList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            products : data.slice(0,5)
        },
        revalidate: 10,
    }

}