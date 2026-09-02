import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import "./App.css";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="emptyCart">
          <h2>Your cart is empty.</h2>

          <button
            className="continueButton"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="cartCard" key={item.id}>

          <img
            className="image"
            src={item.image}
            alt={item.name}
          />

          <div className="details">
            <h2>{item.name}</h2>

            <p>
              Unit Price: ${item.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Total: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <div className="quantityControls">

              <button
                className="quantityButton"
                onClick={() => handleDecrease(item)}
              >
                -
              </button>

              <span className="quantity">
                {item.quantity}
              </span>

              <button
                className="quantityButton"
                onClick={() => handleIncrease(item)}
              >
                +
              </button>

            </div>

            <button
              className="removeButton"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="summary">
        <h2>
          Total: ${calculateTotalAmount().toFixed(2)}
        </h2>

        <button
          className="checkoutButton"
          onClick={handleCheckout}
        >
          Checkout
        </button>

        <button
          className="continueButton"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CartItem;
