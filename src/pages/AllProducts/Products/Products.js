import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.scss";
function Products({ data }) {
  const { bg, border, productIcon, productTitle, productDetail, category } =
    data;
  const [animation, setRandomNumber] = useState(0);
  const anims = ["fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight"];
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * anims.length);
    setRandomNumber(anims[randomNumber]);
  };
  useEffect(() => {
    generateRandomNumber();
  }, []);
  return (
    <div>
      {" "}
      <div
        className={`col-md-12 products-samples col wow ${animation} ${category}`}
        style={{ background: bg, border: border }}
        data-wow-duration="0.5s"
      >
        <img className="col-md-12" src={productIcon} alt="Scholar" />
        <h6>{productTitle}</h6>
        <p>{productDetail}</p>
        <Link to={"/login"} className="offset-md-6">
          <button>Sign up now</button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
