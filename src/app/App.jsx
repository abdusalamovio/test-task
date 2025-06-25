import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductPage, CartPage } from "@/pages";
import { Header } from "@/components";

import "./app.css";

export default function App() {
  return (
    <Router basename="/test-task">
      <main style={{ margin: "10px" }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </Router>
  );
}
