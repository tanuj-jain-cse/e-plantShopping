import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem({ cartItems, onContinueShopping }) {
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div style={styles.container}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <h2>Your cart is empty</h2>

          <button
            style={styles.continueButton}
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div>
            {cartItems.map((item) => {
              const itemTotal =
                item.price * item.quantity;

              return (
                <div
                  key={item.id}
                  style={styles.cartCard}
                >
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.image}
                  />

                  {/* DETAILS */}
                  <div style={styles.details}>
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price:{" "}
                      <strong>${item.price}</strong>
                    </p>

                    <p>
                      Quantity:{" "}
                      <strong>{item.quantity}</strong>
                    </p>

                    <p>
                      Total:{" "}
                      <strong>${itemTotal}</strong>
                    </p>

                    {/* QUANTITY CONTROLS */}
                    <div style={styles.quantityControls}>
                      <button
                        style={styles.quantityButton}
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                      >
                        −
                      </button>

                      <span style={styles.quantity}>
                        {item.quantity}
                      </span>

                      <button
                        style={styles.quantityButton}
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      style={styles.removeButton}
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOTAL */}
          <div style={styles.summary}>
            <h2>
              Total Cart Amount: ${totalAmount}
            </h2>

            {/* CHECKOUT */}
            <button
              style={styles.checkoutButton}
              onClick={handleCheckout}
            >
              Checkout
            </button>

            {/* CONTINUE SHOPPING */}
            <button
              style={styles.continueButton}
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "auto",
  },

  emptyCart: {
    textAlign: "center",
    padding: "50px",
  },

  cartCard: {
    display: "flex",
    gap: "25px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    alignItems: "center",
  },

  image: {
    width: "180px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  details: {
    flex: 1,
  },

  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    margin: "15px 0",
  },

  quantityButton: {
    width: "35px",
    height: "35px",
    fontSize: "20px",
    cursor: "pointer",
  },

  quantity: {
    fontSize: "18px",
    fontWeight: "bold",
  },

  removeButton: {
    padding: "8px 15px",
    backgroundColor: "#d32f2f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  summary: {
    marginTop: "30px",
    padding: "25px",
    borderTop: "2px solid #2e7d32",
    textAlign: "center",
  },

  checkoutButton: {
    padding: "12px 25px",
    margin: "10px",
    backgroundColor: "#2e7d32",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  continueButton: {
    padding: "12px 25px",
    margin: "10px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CartItem;   