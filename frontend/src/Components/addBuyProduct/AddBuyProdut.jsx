import React, { useEffect, useState } from "react";
import "./addBuyProduct.scss";

const AddBuyProdut = (props) => {
  const [lastId, setLastId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [sellingprice, setSellingPrice] = useState();
  const [stockLevel, setStockLevel] = useState();
  const [qty, setQty] = useState();

  useEffect(() => {
    setLastId(props.product.id);
    setId(props.product._id);
    setTitle(props.product.title);
    setCategory(props.product.category);
    setCost(props.product.cost);
    setSellingPrice(props.product.sellingprice);
    setStockLevel(props.product.stocklevel);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = lastId + 1;

    const url = "https://ssd-cooking-equipments.onrender.com/api/buyproduct/";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        category,
        cost,
        sellingprice,
        qty,
      }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result ", json);
        alert("Transaction completed");
        updateProduct();
      });
    });
  };

  const updateProduct = async () => {
    const url = "https://ssd-cooking-equipments.onrender.com/api/product/" + id;
    let stocklevel = Number(stockLevel) + Number(qty);
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stocklevel }),
    });
  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Buy New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Title</label>
            <input
              type="Text"
              placeholder="Item name"
              value={props.product.title}
            ></input>
          </div>
          <div className="item">
            <label>Quantity</label>
            <input
              type="Number"
              placeholder="Item qty"
              onChange={(e) => setQty(e.target.value)}
            ></input>
          </div>
          <button>Buy</button>
        </form>
      </div>
    </div>
  );
};

export default AddBuyProdut;
