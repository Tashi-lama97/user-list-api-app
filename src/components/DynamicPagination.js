import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 const DynamicPagination =({pages, getPage})=> {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    getPage(value)
  };

  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} color="primary"/>
    </div>
  );
}

export default DynamicPagination