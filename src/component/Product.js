import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { baseurl } from "./BaseUrl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${baseurl}/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className="my-5">
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        Back to Products
      </Button>
      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${product.title} - view ${index + 1}`}
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title as="h2">{product.title}</Card.Title>
              <Card.Text as="h3" className="text-primary">
                ${product.price.toFixed(2)}
              </Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Category:</strong> {product.category}
              </Card.Text>
              <Card.Text>
                <strong>Brand:</strong> {product.brand}
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> {product.rating} / 5
              </Card.Text>
              <Card.Text>
                <strong>Stock:</strong> {product.stock} units
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
