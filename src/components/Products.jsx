import React from "react";
import "./Products.css";
function Products(props) {
  console.log(props);
  const addToBasket = () => {
    alert("add");
  };
  return (
    <div className="Prdoucts">
      <div className="bg-cover">
        <button className="addBtn" onClick={addToBasket}>
          addToBasket
        </button>
      </div>
      <div className="product-image">
        <img
          src={props.images[0]}
          alt="productIamge"
          className="imageProduct"
        />
      </div>
      <div className="product-info">
        <p className="product-title">{props.title}</p>
        <p className="product-des">{props.description}</p>
        <div className="price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div>
      </div>
    </div>
  );
}

export default Products;
