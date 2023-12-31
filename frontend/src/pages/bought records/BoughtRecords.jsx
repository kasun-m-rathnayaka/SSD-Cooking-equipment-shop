import React, { useEffect, useState } from "react";
import "./boughtRecords.scss";
import DataTable from "../../Components/datatable/DataTable";

const BoughtRecords = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/buyproduct/";
    const response = await fetch(url);
    return await response.json();
  }

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "sellingprice", headerName: "Sellig Price", width: 100 },
    { field: "qty", headerName: "Quantity", width: 100 },
    { field: "createdAt", headerName: "Date Time", width: 200 },
  ];

  return (
    <div className="user">
      <div className="info">
        <h1>Bought Product</h1>
        {console.log(products)}
      </div>
      <DataTable columns={columns} rows={products} />
    </div>
  );
};

export default BoughtRecords;
