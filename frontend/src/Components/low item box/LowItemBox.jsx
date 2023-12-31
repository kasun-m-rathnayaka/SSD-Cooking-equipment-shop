import React, { useEffect, useState } from "react";
import "./lowitembox.scss";

const LowItemBox = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    lowInventoryitems();
  }, []);

  async function getProducts() {
    const url = "http://localhost:3000/api/product/";
    const response = await fetch(url);
    return await response.json();
  }

  const lowInventoryitems = () => {
    products.map((product) =>
      setItems.apply(product.stocklevel - product.minstocklevel)
    );
    console.log(items);
  };

  return (
    <div className="lowitembox">
      <div className="topbox">
        <h1>Low inventory items</h1>
        <div className="list">
          {products.map((item) => (
            <div className="listItem" key={item.id}>
              <div className="user">
                <img src={item.image} />
                <div className="userText">
                  <span>{item.title}</span>
                  <span className="userEmail">{item.minstocklevel}</span>
                </div>
              </div>
              <div className="ammount">${item.stocklevel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowItemBox;
