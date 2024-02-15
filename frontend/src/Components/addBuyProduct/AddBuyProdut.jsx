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
    setLastId(Math.floor(Math.random() * 1000000000000000));
    setId(props.product._id);
    setTitle(props.product.title);
    setCategory(props.product.category);
    setCost(props.product.cost);
    setSellingPrice(props.product.sellingprice);
    setStockLevel(props.product.stocklevel);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = lastId;

    if (qty <= 0) {
      alert("Please enter valid quanity");
      props.setOpen(false);
      return;
    }

    let date = Date();
    console.log(date);
    const url = "https://ssd-cooking-equipments.onrender.com/api/buyproduct/";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        category,
        cost,
        sellingprice,
        qty,
        date,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      alert(Error);
    }
    if (response.ok) {
      alert("Transaction completed");
      updateProduct();
      props.setOpen(false);
    }
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
