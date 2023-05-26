import React from "react";
import "./Products.css";
import { useAuth } from "../../Context/GlobalState";
function Products(props) {
  const { dispatch, basket } = useAuth();

  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        description: props.description,
        price: props.price,
        image: props.images[0],
        rating: props.rating,
      },
    });
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
