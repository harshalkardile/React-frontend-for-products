import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseurl } from "./BaseUrl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${baseurl}/products/categories`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categorySlug) => {
    navigate(`/products?category=${encodeURIComponent(categorySlug)}`);
  };

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  return (
    <Container className="my-5">
      <h1 className="mb-4">Product Categories</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{category.name}</Card.Title>
                
                <Button
                  variant="outline-primary"
                  className="mt-auto"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  View Products
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
