import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/GlobalState";
import ProductBasket from "./ProductBasket";
// import { Navigate } from "react-router-dom";
function Payment() {
  const { basket, user } = useAuth();
  const getBasketTotal = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  let productsInBasket = basket.map((product) => {
    return <ProductBasket key={product.id} {...product} />;
  });
  return (
    <div className="Payment">
      <h2 className="Payment-title">
        Checkout
        <Link to="/checkout">({basket.length}items)</Link>
      </h2>
      <div className="payment-section">
        <h3 className="section-title">deliver address</h3>
        <p className="section-info">{user.email}</p>
      </div>
      <hr />
      <div className="payment-section">
        <h3 className="section-title">Review items and deliver </h3>
        <p className="section-info">{productsInBasket}</p>
      </div>
      <hr />
      <div className="payment-section">
        <h3 className="section-title">payment method </h3>
        <p className="section-info">
          <form action=""></form>
          <p className="total-price">
            order total : <small>${getBasketTotal}</small>
          </p>
          <button className="buyBtn">buy now</button>
        </p>
      </div>
    </div>
  );
}

export default Payment;
