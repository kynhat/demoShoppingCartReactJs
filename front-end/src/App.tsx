import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./lib/apolloClient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Product from "./components/Product/Product";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Order/OrderDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
