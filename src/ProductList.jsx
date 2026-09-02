import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import CartItem from "./CartItem";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 20,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 4,
    name: "Monstera",
    price: 45,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 35,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1632207691144-4e9a0b3b4f3d",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 40,
    category: "Indoor Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683",
  },

  // Outdoor Plants
  {
    id: 7,
    name: "Rose Plant",
    price: 22,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    name: "Hibiscus",
    price: 28,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1597848212624-e19c5e0c7c9b",
  },
  {
    id: 9,
    name: "Lavender",
    price: 25,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 10,
    name: "Jasmine",
    price: 30,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
  },
  {
    id: 11,
    name: "Marigold",
    price: 18,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
  },
  {
    id: 12,
    name: "Bougainvillea",
    price: 35,
    category: "Outdoor Plants",
    image: "https://images.unsplash.com/photo-1591958911259-bee2173bdccc",
  },

  // Succulents
  {
    id: 13,
    name: "Aloe Vera",
    price: 18,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 14,
    name: "Echeveria",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42",
  },
  {
    id: 16,
    name: "Haworthia",
    price: 17,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 17,
    name: "String of Pearls",
    price: 23,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 18,
    name: "Cactus",
    price: 16,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = React.useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents",
  ];

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  if (showCart) {
    return (
      <div>
        <nav style={styles.navbar}>
          <h2 style={styles.logo}>Paradise Nursery</h2>

          <div style={styles.navLinks}>
            <button
              style={styles.navButton}
              onClick={() => setShowCart(false)}
            >
              Home
            </button>

            <button
              style={styles.navButton}
              onClick={() => setShowCart(false)}
            >
              Plants
            </button>

            <button style={styles.cartButton}>
              🛒 Cart ({cartCount})
            </button>
          </div>
        </nav>

        <CartItem
          cartItems={cartItems}
          onContinueShopping={() => setShowCart(false)}
        />
      </div>
    );
  }

  return (
    <div>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>Paradise Nursery</h2>

        <div style={styles.navLinks}>
          <button
            style={styles.navButton}
            onClick={() => setShowCart(false)}
          >
            Home
          </button>

          <button
            style={styles.navButton}
            onClick={() => setShowCart(false)}
          >
            Plants
          </button>

          <button
            style={styles.cartButton}
            onClick={() => setShowCart(true)}
          >
            🛒 Cart ({cartCount})
          </button>
        </div>
      </nav>

      {/* PAGE TITLE */}
      <div style={styles.header}>
        <h1>Paradise Nursery Plants</h1>
        <p>Choose beautiful plants for your home and garden.</p>
      </div>

      {/* CATEGORIES */}
      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section key={category} style={styles.categorySection}>
            <h2 style={styles.categoryTitle}>{category}</h2>

            <div style={styles.productGrid}>
              {categoryPlants.map((plant) => (
                <div key={plant.id} style={styles.card}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    style={styles.image}
                  />

                  <h3>{plant.name}</h3>

                  <p style={styles.price}>
                    ${plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    style={{
                      ...styles.addButton,
                      ...(isInCart(plant.id)
                        ? styles.disabledButton
                        : {}),
                    }}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2e7d32",
    color: "white",
  },

  logo: {
    margin: 0,
  },

  navLinks: {
    display: "flex",
    gap: "10px",
  },

  navButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  cartButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  header: {
    textAlign: "center",
    padding: "30px",
  },

  categorySection: {
    padding: "20px 40px",
  },

  categoryTitle: {
    borderBottom: "2px solid #2e7d32",
    paddingBottom: "10px",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  price: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  addButton: {
    padding: "10px 15px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  disabledButton: {
    backgroundColor: "#999",
    cursor: "not-allowed",
  },
};

export default ProductList;