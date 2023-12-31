import React, { useEffect, useState } from "react";
import "./sellProduct.scss";
import ProductDataTable from "../../Components/productDataTable/ProductDataTable";
import AddSellProduct from "../../Components/addSellProduct/AddSellProduct";

const SellProduct = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const acitonColumn = {
    field: "action",
    headerName: "Action",
    width: 100,

    renderCell(params) {
      return (
        <div className="action">
          <div className="delete" onClick={() => handleUpdate(params.row)}>
            <img src="/plus.svg"></img>
          </div>
        </div>
      );
    },
  };

  const handleUpdate = (row) => {
    setProduct(row);
    setOpen(true);
  };

  return (
    <div className="user">
      <div className="info">
        <h1>Sell New Product</h1>
      </div>
      <ProductDataTable acitonColumn={acitonColumn} />
      {open && <AddSellProduct setOpen={setOpen} product={product} />}
    </div>
  );
};

export default SellProduct;
