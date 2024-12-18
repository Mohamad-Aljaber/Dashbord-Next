import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  data?: ChartData<"pie">;
  increase: string | number;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  data,
  increase,
}) => {
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

  return (
    <Paper
      sx={{
        minWidth: "330px",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        {icon}
        <Typography>{subtitle}</Typography>
        <Typography>{title}</Typography>
      </Stack>
      <Stack
        direction={"column"}
        gap={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
          }}
        >
          {data ? (
            <Pie
              data={data}
              options={options}
            />
          ) : (
            <Typography>No Data Available</Typography>
          )}
        </Box>
        <Typography>{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default Card;
