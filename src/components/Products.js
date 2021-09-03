import React from "react"
import { Card, Button } from "react-bootstrap"

function Products({
  productName,
  productImage,
  productDescription,
  productId,
}) {
  const buttonStyling = {
    backgroundColor: "#0d1b2a",
    borderColor: "#0d1b2a",
    borderRadius: "30px",
  }
  return (
    <div>
      <Card className="product-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title style={{ color: "#0d1b2a" }}>Card Title</Card.Title>
          <Card.Text style={{ color: "#415a77" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button style={buttonStyling}>View Product</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Products
