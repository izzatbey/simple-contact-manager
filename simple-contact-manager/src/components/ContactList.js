import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import List from "@material-ui/core/List";
import Box from "@mui/material/Box";
import ContactCard from "./ContactCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(1, 0, 2),
    maxWidth: 752,
  },
}));

export default function ContactList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const renderContactList = props.contacts.map((contacts) => {
    return <ContactCard contacts={contacts} />;
  });
  return (
    <div className={classes.root}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "initial",
        }}
      >
        <Typography variant="h6" className={classes.title}>
          Contact List
        </Typography>
        <div className={classes.demo}>
          <List dense={dense}>{renderContactList}</List>
        </div>
      </Box>
    </div>
  );
}
