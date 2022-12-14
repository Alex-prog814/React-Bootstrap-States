import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, deleteProduct, handleEdit }) => {
  return (
    <>
        <center style={{ fontSize: '30px', margin: '20px' }}>Products</center>
        <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
            {products?.map(item => (
                <ProductCard key={item.id} item={item} deleteProduct={deleteProduct} handleEdit={handleEdit} />
            ))}
        </div>
    </>
  )
}

export default ProductList