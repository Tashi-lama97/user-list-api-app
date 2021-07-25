import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: 250,
  },
  cover: {
    width: 151,
  },
}));

const UserCard = ({ firstName, lastName, mail, avatar }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {firstName + " " + lastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {mail}
          </Typography>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={avatar} />
    </Card>
  );
};

export default UserCard;
