import React, { useEffect, useState } from "react";
import "./lowStock.scss";
import { Link } from "react-router-dom";

const LowStock = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "http://localhost:3000/api/product";
    const response = await fetch(url);
    return await response.json();
  }

  return (
    <div className="lowStock">
      <h2>Low Stock Items</h2>

      <div className="list">
        {products &&
          products
            .filter((item) => item.stocklevel <= item.minstocklevel)
            .map(
              (item, index) =>
                index <= 5 && (
                  <div className="listItem" key={item._id}>
                    <div className="item">
                      <img src={item.image || "noavatar.png"} />
                      <div className="productText">
                        <span>{item.title}</span>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                    <div className="count">{item.stocklevel} items</div>
                  </div>
                )
            )}
      </div>
      <Link to="/lowstock">
        <h3>Read more ...</h3>
      </Link>
    </div>
  );
};

export default LowStock;
