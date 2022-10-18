import React, { useState } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

const EditProduct = ({ editProduct, showEditModal, handleEditClose, handleSave }) => {
    const [product, setProduct] = useState(editProduct);

    const editTitle = (e) => {
        setProduct({
            ...product,
            title: e.target.value
        });
    };

    const editDesc = (e) => {
        setProduct({
            ...product,
            desc: e.target.value
        });
    };

    const editPrice = (e) => {
        setProduct({
            ...product,
            price: e.target.value
        });
    };

    const editImage = (e) => {
        setProduct({
            ...product,
            image: e.target.value
        });
    };

    function saveChanges(){
        handleSave(product);
    };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form">
                <FormControl size="lg" className="my-3" placeholder="Title" value={product.title} onChange={editTitle} />

                <FormControl size="lg" className="my-3" placeholder="Description" value={product.desc} onChange={editDesc} />

                <FormControl size="lg" className="my-3" placeholder="Price" value={product.price} onChange={editPrice} />

                <FormControl size="lg" className="my-3" placeholder="Image" value={product.image} onChange={editImage} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="dark" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProduct