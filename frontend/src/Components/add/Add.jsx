import React, { useEffect, useState } from "react";
import "./add.scss";

const Add = (props) => {
  const [lastId, setLastId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [sellingprice, setSellingPrice] = useState();
  const [stocklevel, setStockLevel] = useState();
  const [minstocklevel, setMinStockLevel] = useState();
  const [imageLink, setImage] = useState();

  useEffect(() => {
    setLastId(props.rows.map((item) => item.id));
  }, []);

  const makeImage = (img) => {
    img = img
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/thumbnail?id="
      )
      .split("/view");
    return img[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let image = makeImage(imageLink);

    let profit = Number(sellingprice) - Number(cost);
    console.log(profit);

    let id = Math.floor(Math.random() * 10000000000000000000000000);

    const product = {
      id,
      title,
      category,
      cost,
      sellingprice,
      stocklevel,
      minstocklevel,
      image,
      profit,
    };
    const url = "https://ssd-cooking-equipments.onrender.com/api/product";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      alert("Product added");
      props.setOpen(false);
    }
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
