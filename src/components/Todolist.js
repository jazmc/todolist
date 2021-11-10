import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

export default function Todolist(props) {
  const columns = [
    {
      headerName: "Description",
      field: "desc",
      sortable: true,
      filter: true,
      flex: 1,
      floatingFilter: true,
    },
    {
      headerName: "Date",
      field: "date",
      sortable: true,
      filter: true,
      flex: 1,
      floatingFilter: true,
    },
    {
      headerName: "Priority",
      field: "priority",
      sortable: true,
      filter: true,
      flex: 1,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  return (
    <div
      className="ag-theme-material"
      style={{ height: "700px", width: "70%", margin: "auto" }}
    >
      <AgGridReact
        ref={props.gridRef}
        onGridReady={(params) => (props.gridRef.current = params.api)}
        rowSelection="single"
        columnDefs={columns}
        animateRows="true"
        rowData={props.todos}
      ></AgGridReact>
    </div>
  );
}
