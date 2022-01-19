import React from "react";
import { Typography } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const theme = createTheme();

class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.number === "") {
      alert("Field Mandatory");
      return;
    }

    console.log(this.state);
  };

  render() {
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
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={this.add}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Contact Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
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
                value={this.state.number}
                onChange={(e) => this.setState({ number: e.target.value })}
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
  }
}

export default AddContact;

// export default function AddContact() {
//   const theme = createTheme();
//   state = {
//     name: "",
//     number: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" && this.state.number === "") {
//       alert("Field Mandatory");
//       return;
//     }
//     console.log(this.state);
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Add Contact
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={add}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Contact Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//               value={state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="number"
//               label="Contact Number"
//               name="number"
//               autoComplete="number"
//               autoFocus
//               value={state.number}
//               onChange={(e) => this.setState({ number: e.target.value })}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 7, mb: 2 }}
//             >
//               Add Contact
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
