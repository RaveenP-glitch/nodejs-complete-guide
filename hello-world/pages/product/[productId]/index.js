import React from 'react';
import { useRouter } from 'next/router'

function ProductDetail() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <h1>Details about the products {productId}</h1>
  )
}

export default ProductDetail