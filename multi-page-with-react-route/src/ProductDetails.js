import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();

  return (
    <>
        <div>ProductDetails</div>
        <p>{params.id}</p>
        <p><Link to=".." relative='path'>Back</Link></p>
    </>
  )
}

export default ProductDetails