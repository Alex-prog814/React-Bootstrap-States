import React, { useState } from 'react';
import { Button, Modal, FormControl } from 'react-bootstrap';

const EditProduct = () => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form">
                <FormControl size="lg" className="my-3" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

                <FormControl size="lg" className="my-3" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />

                <FormControl size="lg" className="my-3" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

                <FormControl size="lg" className="my-3" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={createProduct}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProduct