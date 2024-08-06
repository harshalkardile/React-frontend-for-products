import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseurl } from "./BaseUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let result = await fetch(`${baseurl}/products/`);
        result = await result.json();
        console.log(result);
        setProducts(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

    function updateProduct(productId) {
        console.log(productId);
    navigate(`/products/${productId}`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        {products.length !== 0 ? (
          products.products.map((item) => (
            <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={item.images[0] || "holder.js/100px180"}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      height: "3em", // Adjust this value based on your font size and line height
                    }}
                  >
                    {item.description}
                  </Card.Text>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => updateProduct(item.id)}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <h1 className="no-results">No Results Found</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Products;
