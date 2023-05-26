import React from "react";
import "./Home.css";
import productData from "../data.json";
import Products from "../components/home-component/Products";
import imageHome from "../images/home.jpg";
import FeatureHome from "./home-component/FeatureHome";
import Movies from "./home-component/Movies";
import Benefits from "./home-component/Benefits";
import PrimeDay from "../images/Prime_PrimeDay_Desktop_cropped2x._CB654657019_.png";

function Home() {
  const showProducts = productData.map((product) => {
    return <Products key={product.id} {...product} />;
  });
  return (
    <div className="Home">
      <div className="image-home">
        <img src={imageHome} alt="imageHome" className="imageHome" />
      </div>
      <div className="home-content">
        <div className="home-section">
          <FeatureHome />
        </div>
        <div className="home-section">
          <Movies />
        </div>
        <div className="home-section">
          <Benefits />
        </div>
        <div className="home-PrimeDay-section">
          <h1 className="PrimeDay-title">Prime Day</h1>
          <p className="PrimeDay-des">
            An annual event exclusively for Prime members, delivering two days
            of epic savings.
          </p>
        </div>
        <div className="home-section-product">{showProducts}</div>
      </div>
    </div>
  );
}

export default Home;
