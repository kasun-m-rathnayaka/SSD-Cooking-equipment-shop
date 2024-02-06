import React, { useEffect, useState } from "react";
import "./lowStockItems.scss";
import DataTable from "../../Components/datatable/DataTable";

const LowStockItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "https://ssd-cooking-equipments.onrender.com/api/product/";
    const response = await fetch(url);
    return await response.json();
  }

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 80,
      editable: true,
      renderCell: (params) => {
        return <img src={params.row.image || "noavatar.png"} />;
      },
    },
    { field: "title", headerName: "Title", width: 200 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "cost", headerName: "Cost", width: 100 },
    { field: "sellingprice", headerName: "Sellig Price", width: 100 },
    { field: "stocklevel", headerName: "Stock Level", width: 100 },
    { field: "minstocklevel", headerName: "Min Stock Level", width: 150 },
  ];

  return (
    <div className="lowStockItem">
      <div className="info">
        <h1>Low Stock Items</h1>
      </div>
      <DataTable
        columns={columns}
        rows={products.filter((item) => item.stocklevel <= item.minstocklevel)}
      />
    </div>
  );
};

export default LowStockItems;
