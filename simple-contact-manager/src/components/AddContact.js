import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  form: {},
}));

export default function AddContact() {
  const classes = useStyles();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Contact
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Contact Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="number"
              label="Contact Number"
              name="number"
              autoComplete="number"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 7, mb: 2 }}
            >
              Add Contact
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

  // return (
  //   <div className="ui main">
  //     <Typography
  //       className={classes.root}
  //       variant="h4"
  //       component="h1"
  //       align="center"
  //     >
  //       Add Contact
  //     </Typography>
  //     <form className={classes.root} noValidate autoComplete="off">
  //       <TextField id="standard-basic" label="Standard" />
  //     </form>
  //   </div>
  // );
}
