import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Box, useTheme } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart: React.FC = () => {
  const theme = useTheme();
  const data = {
    labels: ["Syrian", "Egyptian", "Lebanese", "Palestinian", "German"],
    datasets: [
      {
        label: "My Dataset",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          theme.palette.secondary.main,
          theme.palette.primary.dark,
          theme.palette.error.main,
          theme.palette.success.main,
          theme.palette.text.primary,
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: theme.palette.text.primary,
        },
      },
      title: {
        display: true,
        text: "Number of employees in countries",
        color: theme.palette.text.primary,
      },
    },
  };

  return (
    <Box
      sx={{
        padding: "20px",
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pie
        data={data}
        options={options}
      />
    </Box>
  );
};

export default PieChart;
