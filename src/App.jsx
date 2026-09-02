import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page background-image">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery, your online destination for
              beautiful and healthy plants.
            </p>

            <p>
              Explore our collection of indoor plants, outdoor plants,
              and succulents.
            </p>

            <button
              className="get-started"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>

            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
