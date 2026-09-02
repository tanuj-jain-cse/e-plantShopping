import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";

function App() {
  const [started, setStarted] = useState(false);

  if (started) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home with beautiful houseplants.
        </p>

        <button
          className="get-started"
          onClick={() => setStarted(true)}
        >
          Get Started
        </button>

        <AboutUs />
      </div>
    </div>
  );
}

export default App;