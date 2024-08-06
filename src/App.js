import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Products from "./component/Products";
import Categories from "./component/Categories";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/category/:category_name" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
