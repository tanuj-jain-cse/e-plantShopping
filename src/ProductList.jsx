import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
} from "./CartSlice";
import CartItem from "./CartItem";
import "./App.css";

const plants = {
  "Indoor Plants": [
    {
      id: 1,
      name: "Snake Plant",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae2f7b",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    },
    {
      id: 3,
      name: "Spider Plant",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    },
    {
      id: 4,
      name: "Monstera",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1632207691144-0c9a7a0f9c66",
    },
    {
      id: 6,
      name: "Rubber Plant",
      price: 27,
      image:
        "https://images.unsplash.com/photo-1597055181300-df90a6c2c5c1",
    },
  ],

  "Outdoor Plants": [
    {
      id: 7,
      name: "Rose Plant",
      price: 22,
      image:
        "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
    },
    {
      id: 8,
      name: "Hibiscus",
      price: 24,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 9,
      name: "Lavender",
      price: 19,
      image:
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
    },
    {
      id: 10,
      name: "Jasmine",
      price: 21,
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    },
    {
      id: 11,
      name: "Marigold",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1597848212624-e19d0c3e7c1e",
    },
    {
      id: 12,
      name: "Bougainvillea",
      price: 26,
      image:
        "https://images.unsplash.com/photo-1597848212624-e19d0c3e7c1e",
    },
  ],

  Succulents: [
    {
      id: 13,
      name: "Aloe Vera",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    },
    {
      id: 14,
      name: "Echeveria",
      price: 17,
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    },
    {
      id: 15,
      name: "Jade Plant",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    },
    {
      id: 16,
      name: "Haworthia",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    },
    {
      id: 17,
      name: "String of Pearls",
      price: 23,
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 18,
      name: "Cactus",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    },
  ],
};

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = useState(false);

  const addedItems = cartItems.map((item) => item.id);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-page">

      {/* REQUIRED NAVBAR */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="navbar-links">
          <button onClick={() => setShowCart(false)}>
            Home
          </button>

          <button onClick={() => setShowCart(false)}>
            Plants
          </button>

          <button
            className="cart-button"
            onClick={() => setShowCart(true)}
          >
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      {showCart ? (
        <CartItem />
      ) : (
        <>
          <div className="header">
            <h1>Paradise Nursery Plants</h1>
            <p>
              Choose from our collection of beautiful plants.
            </p>
          </div>

          {Object.entries(plants).map(
            ([category, categoryPlants]) => (
              <section
                className="categorySection"
                key={category}
              >
                <h2 className="categoryTitle">
                  {category}
                </h2>

                <div className="productGrid">
                  {categoryPlants.map((plant) => (
                    <div className="card" key={plant.id}>
                      <img
                        className="image"
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3>{plant.name}</h3>

                      <p className="price">
                        ${plant.price}
                      </p>

                      <button
                        className="addButton"
                        disabled={addedItems.includes(plant.id)}
                        onClick={() =>
                          dispatch(addItem(plant))
                        }
                      >
                        {addedItems.includes(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;
