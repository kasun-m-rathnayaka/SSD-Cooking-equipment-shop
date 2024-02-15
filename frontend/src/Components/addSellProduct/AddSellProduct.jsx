import React, { useEffect, useState } from "react";
import "./addSellProduct.scss";

const AddSellProduct = (props) => {
  const [lastId, setLastId] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [cost, setCost] = useState();
  const [sellingprice, setSellingPrice] = useState();
  const [stockLevel, setStockLevel] = useState();
  const [qty, setQty] = useState();
  const [profit, setProfit] = useState();
  const [kpi, setKpi] = useState();

  let status = true;

  const date = Date().substring(0, 15);
  console.log(date);

  useEffect(() => {
    setLastId(Math.floor(Math.random() * 1000000000000000));
    getKpi().then(setKpi);
    setId(props.product._id);
    setTitle(props.product.title);
    setCategory(props.product.category);
    setCost(props.product.cost);
    setSellingPrice(props.product.sellingprice);
    setStockLevel(props.product.stocklevel);
    setProfit(props.product.profit);
  }, []);

  const getKpi = async () => {
    const url = "https://ssd-cooking-equipments.onrender.com/api/kpi/";
    const response = await fetch(url);
    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (stockLevel < qty) {
      alert("No sufficient items in the stock");
      props.setOpen(false);
      return;
    }

    if (qty <= 0) {
      alert("Please enter valid quanity");
      props.setOpen(false);
      return;
    }

    let id = lastId;
    let date = Date();
    const url = "https://ssd-cooking-equipments.onrender.com/api/sellproduct/";
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
        profit,
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
      updateKpi();
      props.setOpen(false);
    }
  };

  const updateProduct = async () => {
    const url = "https://ssd-cooking-equipments.onrender.com/api/product/" + id;
    let stocklevel = Number(stockLevel) - Number(qty);
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stocklevel }),
    });
  };

  const updateKpi = async () => {
    kpi
      .filter((item) => item.date == date)
      .map((item) => {
        let tprofit = item.profit * qty + profit;
        let revenue = item.revenue * qty + sellingprice;
        let expences = item.expences * qty + cost;
        let id = item._id;

        patchKpi(tprofit, revenue, expences, id);
        status = false;
      });
    if (status) {
      postKpi();
    }
  };
  console.log("status : ", status);

  async function postKpi() {
    const data = {
      profit: profit * qty,
      revenue: sellingprice * qty,
      expences: cost * qty,
      date,
    };
    console.log(data);
    const url = "https://ssd-cooking-equipments.onrender.com/api/kpi/";
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    await response.json();
  }

  async function patchKpi(profit, revenue, expences, id) {
    console.log(id);
    const url = "https://ssd-cooking-equipments.onrender.com/api/kpi/" + id;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profit, revenue, expences }),
    });
  }
  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Sell New Product</h1>
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
          <button>Sell</button>
        </form>
      </div>
    </div>
  );
};

export default AddSellProduct;
