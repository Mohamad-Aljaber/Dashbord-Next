import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LineChart from "../lineChart/LineChart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "./data";
const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", gap: 2, my: 3 }}
    >
      <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Paper>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.secondary.main,
                  p: 1.5,
                  fontWeight: "bold",
                }}
              >
                Recent transactions
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  p: 1.5,
                  fontWeight: "bold",
                }}
              >
                $462.496.53
              </Typography>
            </Box>
            <Box sx={{ mr: 3, fontSize: "40px" }}>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "30px", color: theme.palette.secondary.main }}
                />
              </IconButton>
            </Box>
          </Stack>
          <LineChart isDashboard={true} />
        </Paper>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Paper sx={{ my: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              p: 1.5,
              fontWeight: "bold",
            }}
          >
            Recent transactions
          </Typography>
        </Paper>
        {mockTransactions.map(item => {
          return (
            <Paper
              sx={{
                my: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1.5,
              }}
            >
              <Box width={"250px"}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  {item.Title1}
                </Typography>
                <Typography>{item.Title2}</Typography>
              </Box>
              <Typography>{item.Date}</Typography>
              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
              >
                {item.Price}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;
