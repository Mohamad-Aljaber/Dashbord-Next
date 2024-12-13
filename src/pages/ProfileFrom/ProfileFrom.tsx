import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Snackbar,
  IconButton,
  Alert,
  SnackbarCloseReason,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Close } from "@mui/icons-material";

const regEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format

const currencies = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

enum roleEnum {
  Admin = "Admin",
  Manager = "Manager",
  User = "User",
}

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;
  Address1: string;
  Address2: string;
  role: roleEnum;
}

const ProfileFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    handleClick();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack
        sx={{ gap: 2 }}
        direction={"row"}
      >
        <TextField
          error={!!errors.firstName}
          helperText={
            errors.firstName
              ? "First name is required and must be at least 3 characters long."
              : null
          }
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          error={!!errors.lastName}
          helperText={errors.lastName ? "Last name is required." : null}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          {...register("lastName", { required: true })}
        />
      </Stack>
      <TextField
        type="email"
        error={!!errors.email}
        helperText={
          errors.email
            ? errors.email.type === "pattern"
              ? "Please enter a valid email address (e.g., example@domain.com)."
              : "Email is required."
            : null
        }
        id="filled-basic"
        label="Email"
        variant="filled"
        {...register("email", { required: true, pattern: regEmail })}
      />
      <TextField
        type="number"
        error={!!errors.contactNumber}
        helperText={
          errors.contactNumber
            ? "Contact number is required and must be valid."
            : null
        }
        id="filled-basic"
        label="Contact Number"
        variant="filled"
        {...register("contactNumber", { required: true })}
      />
      <TextField
        error={!!errors.Address1}
        helperText={errors.Address1 ? "Address 1 is required." : null}
        id="filled-basic"
        label="Address 1"
        variant="filled"
        {...register("Address1", { required: true })}
      />
      <TextField
        id="filled-basic"
        label="Address 2"
        variant="filled"
        {...register("Address2")}
      />
      <TextField
        error={!!errors.role}
        helperText={errors.role ? "Please select a role." : null}
        id="outlined-select-currency"
        select
        label="Role"
        variant="filled"
        {...register("role", { required: true })}
      >
        {currencies.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={handleClose}
        >
          <Alert
            severity="info"
            onClose={handleClose}
          >
            Account Created successful
            </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProfileFrom;
