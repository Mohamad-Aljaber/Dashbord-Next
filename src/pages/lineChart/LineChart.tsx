import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Box, useTheme } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Surplus salary for Employees",
    },
  },
};

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Engineers",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.dark,
      },
      {
        label: "Doctors",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: theme.palette.secondary.main,

        backgroundColor: theme.palette.secondary.main,
      },
      {
        label: "Teachers",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: theme.palette.success.main,
        backgroundColor: theme.palette.success.main,
      },
    ],
  };

  return (
    <Box
      sx={{
        height: isDashboard ? "400px" : "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Line
        options={options}
        data={data}
      />
    </Box>
  );
};

export default LineChart;
