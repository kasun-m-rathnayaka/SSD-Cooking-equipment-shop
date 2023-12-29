import "./dataTable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const DataTable = (props) => {
  return (
    <div className="dataTable">
      <div className="dataGrid">
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={props.rows}
            columns={props.columns}
            slots={{ toolbar: GridToolbar }}
            density="compact"
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
