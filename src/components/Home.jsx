import React from "react";
import "./Home.css";
import productData from "../data.json";
import Products from "../components/Products";
import imageHome from "../images/home.jpg";

function Home() {
  console.log(productData);
  const showProducts = productData.map((product) => {
    return <Products key={product.id} {...product} />;
  });
  return (
    <div className="Home">
      <div className="image-home">
        <img src={imageHome} alt="imageHome" className="imageHome" />
      </div>

      <div className="home-content">{showProducts}</div>
    </div>
  );
}

export default Home;
