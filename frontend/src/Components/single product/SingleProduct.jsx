import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singleProduct.scss";

const SingleProduct = (props) => {
  const { state } = useLocation();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [sellingprice, setSellingPrice] = useState();
  const [stocklevel, setStockLevel] = useState();
  const [minstocklevel, setMinStockLevel] = useState();
  const [image, setImage] = useState();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url =
      "https://ssd-cooking-equipments.onrender.com/api/product/" + state._id;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        category,
        cost,
        sellingprice,
        stocklevel,
        minstocklevel,
        image,
      }),
    }).then((response) => {
      response.json().then((json) => {
        console.log("result ", json);
        alert("Update completed");
        updateProduct();
      });
    });
  };

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {state.image && <img src={state.image} alt="" />}
            <h1>{state.title}</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="details">
              <span className="itemTitle">Item name</span>
              <input
                type="text"
                placeholder={state.title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item category</span>
              <input
                type="text"
                placeholder={state.category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item cost</span>
              <input
                type="text"
                placeholder={state.cost}
                onChange={(e) => setCost(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item selling price</span>
              <input
                type="text"
                placeholder={state.sellingprice}
                onChange={(e) => setSellingPrice(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item stocklevel</span>
              <input
                type="text"
                placeholder={state.stocklevel}
                onChange={(e) => setStockLevel(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item min stock level</span>
              <input
                type="text"
                placeholder={state.minstocklevel}
                onChange={(e) => setMinStockLevel(e.target.value)}
              ></input>
            </div>
            <div className="details">
              <span className="itemTitle">Item image</span>
              <input
                type="text"
                placeholder={state.image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
