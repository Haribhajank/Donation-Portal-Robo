import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Success = () => {
    const searchQuery = useSearchParams()[0]

    const referenceNum = searchQuery.get("reference")

  return (
    <div>Success {referenceNum}</div>
  )
}

export default Success