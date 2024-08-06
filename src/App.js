import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Products from "./component/Products";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
