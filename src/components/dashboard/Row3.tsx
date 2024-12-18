import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";
import { data2 } from "../../lib/dataDashboard";
import BarChart from "../barChart/BarChart";

const Row3 = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
    },
  };
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
    >
      <Paper sx={{ p: 2, flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            p: 1.5,
            fontWeight: "bold",
          }}
        >
          Campaing
        </Typography>
        <Stack sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: "150px",
              height: "150px",
            }}
          >
            {data2 ? (
              <Pie
                data={data2}
                options={options}
              />
            ) : (
              <Typography>No Data Available</Typography>
            )}
          </Box>
          <Typography variant="h6">$48.352 revenue generated</Typography>
          <Typography>includers extra misc expenditures and costs</Typography>
        </Stack>
      </Paper>
      <Paper sx={{ p: 2, flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            p: 1.5,
            fontWeight: "bold",
          }}
        >
          Sales Quantity
        </Typography>
        <Box height={"350px"}>
          <BarChart isDashboard={true} />
        </Box>
      </Paper>
    </Stack>
  );
};

export default Row3;
