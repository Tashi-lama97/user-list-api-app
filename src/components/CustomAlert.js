import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomAlert = ({ sev = "info", message = "Test" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={sev}>{message}</Alert>
    </div>
  );
};
export default CustomAlert;
