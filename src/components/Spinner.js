import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Spinner = ({ color = "primary" }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color={color} />
    </div>
  );
};

export default Spinner;
