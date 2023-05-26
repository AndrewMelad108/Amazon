import React from "react";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/GlobalState";
import ProductBasket from "./ProductBasket";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment() {
  const Navigate = useNavigate();
  const { basket, user, dispatch } = useAuth();
  const getBasketTotal = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  let productsInBasket = basket.map((product) => {
    return <ProductBasket key={product.id} {...product} />;
  });
  console.log(basket);
  return (
    <div className="Payment">
      <h2 className="Payment-title">
        Checkout
        <Link to="/checkout">({basket.length}items)</Link>
      </h2>
      <div className="payment-section">
        <h3 className="section-title">deliver address</h3>
        <p className="section-info">{user ? user.email : "hello guest"}</p>
      </div>
      <hr />
      <div className="payment-section">
        <h3 className="section-title">Review items and deliver </h3>
        <div className="section-info">{productsInBasket}</div>
      </div>
      <hr />
      <div className="payment-section">
        <h3 className="section-title">payment method </h3>
        <div className="section-info">
          <p className="total-price">
            order total : <small>${getBasketTotal}</small>
          </p>

          <button
            className="buyBtn"
            onClick={() => {
              const docRef = addDoc(collection(db, "orders"), {
                basket: basket,
                userID: user.uid,
                totalPrice: getBasketTotal,
              });
              dispatch({
                type: "EMPTY_BASKET",
              });
              Navigate("/orders");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
