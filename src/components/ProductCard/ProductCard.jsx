import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ item, deleteProduct, handleEdit }) => {

  return (
    <Card style={{ width: '18rem', marginBottom: '10px' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                Price: {item.price}$ <br/>
                Description: {item.desc}
            </Card.Text>
            <Button variant="danger" onClick={() => deleteProduct(item.id)}>Delete</Button>
            <Button className="mx-1" variant="secondary" onClick={() => handleEdit(item.id)}>Edit</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard