import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Product from "./Routes/Product";
import Trainer from "./Routes/Trainer";
import Pricing from "./Routes/Pricing";
import Contact from "./Routes/Contact";
import Navbar from "./Components/Navbar";
import Cart from "./Cart/Cart";
function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Service />} exact />
        <Route path="/product" element={<Product />} exact />
        <Route path="/trainer" element={<Trainer />} exact />
        <Route path="/pricing" element={<Pricing />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
