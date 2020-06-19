import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

//https://material-ui.com/components/chips/

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    width: '600px',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipsCategories = ({ categories, transactions, deleteCategory }) => {
  const classes = useStyles();

  const categoriesInUse = transactions.map(
    (transaction) => transaction.category
  );

  const handleDelete = (chipToDelete) => () => {
    deleteCategory(chipToDelete.value);
  };

  return (
    <Paper component='ul' className={classes.root} variant={'outlined'}>
      {categories.map((data) => {
        return (
          <li key={data.value}>
            <Chip
              label={data.label}
              onDelete={
                categoriesInUse.indexOf(data.value) > -1
                  ? null
                  : handleDelete(data)
              }
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipsCategories;
