import React, { useEffect, useState } from "react";
import "./Add.scss";

const Add = (props) => {
  const [lastId, setLastId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [sellingprice, setSellingPrice] = useState();
  const [stocklevel, setStockLevel] = useState();
  const [minstocklevel, setMinStockLevel] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    setLastId(props.rows.map((item) => item.id));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let id = lastId[0] + 1;

    const url = "http://localhost:3000/api/product/";
    await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id,
        title,
        category,
        cost,
        sellingprice,
        stocklevel,
        minstocklevel,
        image,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert("Product Insertion Successful "))
      .catch((error) => console.error(error));
  };

  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label>Title</label>
            <input
              type="text"
              placeholder="Product Title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Category</label>
            <input
              type="text"
              placeholder="Product Category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Cost</label>
            <input
              type="Number"
              placeholder="Product Cost"
              onChange={(e) => setCost(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Selling Price</label>
            <input
              type="Number"
              placeholder="Product Selling Price"
              onChange={(e) => setSellingPrice(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Stock Level</label>
            <input
              type="Number"
              placeholder="Product stock Level"
              onChange={(e) => setStockLevel(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Min Stock Level</label>
            <input
              type="Number"
              placeholder="Product Min Stock Level"
              onChange={(e) => setMinStockLevel(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Image Link</label>
            <input
              type="text"
              placeholder="Product Image Link"
              onChange={(e) => setImage(e.target.value)}
              className="image"
            ></input>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
