import React from 'react'
import { useRouter } from 'next/router'

function Review() {
    const router = useRouter();
    const {productId, reviewId} = router.query;
  return (
    <div>Welcome to review number: {reviewId} for product: {productId} </div>
  )
}

export default Review