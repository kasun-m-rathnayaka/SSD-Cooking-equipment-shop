import React, { useEffect, useState } from "react";
import "./single.scss";

const Single = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/product/";
    const response = await fetch(url);
    return await response.json();
  }

  return <div className="single">Product</div>;
};

export default Single;
