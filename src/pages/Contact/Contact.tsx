import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";

const Contacts: React.FC = () => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        checkboxSelection
      />
    </div>
  );
};
export default Contacts;
