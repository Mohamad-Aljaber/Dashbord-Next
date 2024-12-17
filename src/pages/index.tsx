import Head from "next/head";
import * as React from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material/styles";
import { getDesing } from "../lib/theme";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Dashboard from "@/pages/dashboard/Dashboard";
import Team from "@/pages/team";
import Contact from "@/pages/contact/Contact";
import ProfileFrom from "@/pages/profileFrom/ProfileFrom";
import Calender from "@/pages/calender/Calender";
import BarChart from "@/pages/barChart/BarChart";
import PieChart from "@/pages/pieChart/PieChart";
import LineChart from "@/pages/lineChart/LineChart";
import FAQ from "@/pages/faqPage/FAQ";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = React.useMemo(() => createTheme(getDesing(mode)), [mode]);
  const [handleSection, setHandleSection] = useState<string>("Dashboard");
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
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta
          name="description"
          content="Data Dashboard"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

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
    </>
  );
}
