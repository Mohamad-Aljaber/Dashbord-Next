import { Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={"column"}
        gap={1}
      >
        <Typography
          variant="h3"
          sx={{ color: theme.palette.primary.dark, fontWeight: "bold" }}
        >
          Dashboard
        </Typography>
        <Typography sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
          welcome to your dashboard
        </Typography>
        <Button
          component="label"
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            width: "fit-content",
            alignSelf: "flex-end",
            textTransform: "capitalize",
          }}
        >
          daolnwod repeats
        </Button>
      </Stack>
      <Row1 />
      <Row2  />
      <Row3/>
    </div>
  );
};

export default Dashboard;
