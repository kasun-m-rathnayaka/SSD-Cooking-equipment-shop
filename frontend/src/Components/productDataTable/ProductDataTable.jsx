import React, { useEffect, useState } from "react";
import DataTable from "../../Components/datatable/DataTable";

const ProductDataTable = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  async function getProducts() {
    const url = "http://localhost:3000/api/product/";
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
    props.acitonColumn,
  ];

  return (
    <div className="prodcutDataTable">
      <DataTable columns={columns} rows={products} />
    </div>
  );
};

export default ProductDataTable;
