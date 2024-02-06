import React, { useEffect, useState } from "react";
import "./salesRecords.scss";
import DataTable from "../../Components/datatable/DataTable";

const SalesRecords = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/sellproduct/";
    const response = await fetch(url);
    return await response.json();
  }

  const columns = [
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "sellingprice", headerName: "Sellig Price", width: 100 },
    { field: "qty", headerName: "Quantity", width: 100 },
    {
      field: "date",
      headerName: "Date Time",
      width: 200,
      dateSetting: {
        format: "dd/MM/yyyy",
      },
    },
  ];

  return (
    <div className="user">
      <div className="info">
        <h1>Sold Product</h1>
        {console.log(products)}
      </div>
      <DataTable columns={columns} rows={products} />
    </div>
  );
};

export default SalesRecords;
