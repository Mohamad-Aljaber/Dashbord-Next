import Head from "next/head";
import localFont from "next/font/local";
import Dr from "./components/mui/Dr";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material/styles";
import { getDesing } from "./components/theme";
import React, { useState } from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  
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

      <main>
        <Dr ></Dr>
      </main>
      </>
  );
}
