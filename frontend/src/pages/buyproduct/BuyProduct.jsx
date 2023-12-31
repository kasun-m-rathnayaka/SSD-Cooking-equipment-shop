import React, { useEffect, useState } from "react";
import "./buyProduct.scss";
import ProductDataTable from "../../Components/productDataTable/ProductDataTable";
import AddBuyProdut from "../../Components/addBuyProduct/AddBuyProdut";

const BuyProduct = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

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
          <div className="plus" onClick={() => handleUpdate(params.row)}>
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
        <h1>Buy New Product</h1>
      </div>
      <ProductDataTable acitonColumn={acitonColumn} />
      {open && <AddBuyProdut setOpen={setOpen} product={product} />}
    </div>
  );
};

export default BuyProduct;
