import { Stack, useTheme } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { data1, data2, data3, data4 } from "../../lib/dataDashboard";
import Card from "../Card";

ChartJS.register(ArcElement, Tooltip, Legend);

const Row1 = () => {
  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      gap={2}
      sx={{
        my: 2,
        flexWrap: "wrap",
        justifyContent: { xs: "center", sm: "space-between" },
      }}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "2rem", color: theme.palette.secondary.main }}
          />
        }
        title={"12,363"}
        subtitle={"Emails sent"}
        data={data1}
        increase={"+14%"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "2rem", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subtitle={"Sales obtained"}
        data={data2}
        increase={"+21%"}
      />
      <Card
        icon={
          <PersonAddAlt1OutlinedIcon
            sx={{ fontSize: "2rem", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subtitle={"New Clients"}
        data={data3}
        increase={"+5%"}
      />
      <Card
        icon={
          <TrafficOutlinedIcon
            sx={{ fontSize: "2rem", color: theme.palette.secondary.main }}
          />
        }
        title={"1,321,230"}
        subtitle={"Traffic Received"}
        data={data4}
        increase={"+43%"}
      />
    </Stack>
  );
};

export default Row1;
