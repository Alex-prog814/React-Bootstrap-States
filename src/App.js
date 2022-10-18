import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import EditProduct from './components/EditProduct/EditProduct';

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [products, setProducts] = useState([]);

  function addProduct(newObj){
    let newProducts = [...products];
    newProducts.push(newObj);
    console.log(newProducts);
    setProducts(newProducts);
  };

  function deleteProduct(id){
    let newProducts = [...products];
    newProducts = newProducts.filter(item => item.id !== id);
    setProducts(newProducts);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);
  const [editProduct, setEditProduct] = useState({});

  function handleEdit(id){
    let obj = products.find(item => item.id === id);
    setEditProduct(obj);
    console.log(obj);
    setShowEditModal(true);
  };

  function handleSave(obj){
    let newProducts = products.map(item => {
      if(item.id === obj.id){
        return obj;
      };
      return item;
    });
    setProducts(newProducts);
    setShowEditModal(false);
  };

  return (
    <>
      <Header handleShow={handleShow} />
      <AddProduct show={show} handleClose={handleClose} addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} handleEdit={handleEdit} />
      {showEditModal && <EditProduct editProduct={editProduct} showEditModal={showEditModal} handleEditClose={handleEditClose} handleSave={handleSave} />}
    </>
  )
}

export default App

