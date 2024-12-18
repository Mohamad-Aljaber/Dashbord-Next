import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, useTheme, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { rows } from "../../lib/dataTeam";
interface RowData {
  id: number;
  Name: string;
  Email: string;
  Age: number;
  Phone: string;
  access: "Admin" | "User" | "Manager";
}

const Team: React.FC = () => {
  const theme = useTheme();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Age",
      headerName: "Age",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: params => {
        const access = params.row.access as RowData["access"];
        return (
          <Box
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "User"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              p: "5px",
              textAlign: "center",
              width: "100px",
              m: "auto",
              mt: 1,
              borderRadius: "3px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            ) : access === "User" ? (
              <LockOpenOutlinedIcon
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            ) : (
              <SecurityOutlinedIcon
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            <Typography
              variant="body1"
              color="#fff"
              fontSize="15px"
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default Team;
