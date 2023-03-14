import React from 'react'
import { useRouter } from 'next/router'

function Reviews() {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <div>Welcome to the reviews Section for product: {productId}</div>
  )
}

export default Reviews