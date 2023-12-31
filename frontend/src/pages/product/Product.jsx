import React, { useEffect, useState } from "react";
import "./product.scss";
import Add from "../../Components/add/Add";
import { Link } from "react-router-dom";
import ProductDataTable from "../../Components/productDataTable/ProductDataTable";

const Product = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/product/";
    const response = await fetch(url);
    return await response.json();
  }

  const acitonColumn = {
    field: "action",
    headerName: "Action",
    width: 100,

    renderCell(params) {
      return (
        <div className="action">
          <Link to={`/product/${params.row.id}`} state={params.row}>
            <img src="/view.svg"></img>
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row._id)}>
            <img src="/delete.svg"></img>
          </div>
        </div>
      );
    },
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete product") == true) {
      console.log(id + "deleted");
      await fetch(
        "https://ssd-cooking-equipments.onrender.com/api/product" + id,
        {
          method: "DELETE",
        }
      );
    }
  };

  return (
    <div className="user">
      <div className="info">
        <h1>Product</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <ProductDataTable acitonColumn={acitonColumn} />
      {open && <Add setOpen={setOpen} rows={products} />}
    </div>
  );
};

export default Product;
