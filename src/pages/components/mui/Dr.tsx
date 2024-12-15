import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { getDesing } from "../theme";
import Dashboard from "@/pages/dashboard";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact/Contact";
import ProfileFrom from "@/pages/ProfileFrom/ProfileFrom";
import Calender from "@/pages/Calender/Calender";
import BarChart from "@/pages/barChart/BarChart";
import PieChart from "@/pages/pieChart/PieChart";
import LineChart from "@/pages/lineChart/LineChart";
import FAQ from "@/pages/faqPage/FAQ";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = React.useMemo(() => createTheme(getDesing(mode)));
  const [handleSection, setHandleSection] = useState<string>("home");
  const renderContent = () => {
    switch (handleSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Manga Team":
        return <Team />;
      case "Contacts Informantion":
        return <Contact />;
      case "Profile From":
        return <ProfileFrom />;
      case "Calender":
        return <Calender />;
      case "FAQ Page":
        return <FAQ />;
      case "Bar Chart":
        return <BarChart />;
      case "Pie Chart":
        return <PieChart />;
      case "Line Chart":
        return <LineChart />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
          setHandleSection={setHandleSection}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <DrawerHeader />
          <Box>{renderContent()}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
