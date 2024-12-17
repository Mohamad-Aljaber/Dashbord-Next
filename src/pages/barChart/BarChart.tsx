import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// تسجيل المكونات المطلوبة
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const data: ChartData<"bar"> = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Spain",
        data: [900, 1100, 1300, 1500, 1600, 1700],
        backgroundColor: theme.palette.success.main,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Sweden",
        data: [1400, 1600, 1900, 2000, 2200, 2400],
        backgroundColor: theme.palette.secondary.dark,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Syria",
        data: [1700, 1900, 2100, 2300, 2500, 2700],
        backgroundColor: theme.palette.primary.dark,
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",

        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: true,
        text: "Salary/Month by Year",
        color: theme.palette.text.primary,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          color: theme.palette.text.primary,
        },
        ticks: {
          color: theme.palette.text.primary,
        },
      },
      y: {
        title: {
          display: true,
          text: "Salary/Month",
          color: theme.palette.text.primary,
        },
        ticks: {
          color: theme.palette.text.primary,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <Box
      sx={{
        height: isDashboard ? "350px" : "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Bar
        data={data}
        options={options}
      />
    </Box>
  );
};

export default BarChart;
