import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChipsSettings01 from './ChipsSettings01';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    flexDirection: 'column',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  inputElement: {
    width: '210px',
    height: '100%',
  },
  button: {
    marginLeft: '1rem',
    marginTop: '5px',
  },
  text: {
    marginBottom: '0.3rem',
  },
}));

const CategorySettings = ({
  title,
  id,
  transactions,
  categories,
  getCategories,
  deleteCategory,
  addCategory,
}) => {
  const [newCategory, setNewCategory] = useState('');
  const classes = useStyles();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleAddCategory = () => {
    if (newCategory) {
      if (
        categories.some(
          (category) =>
            category.value === newCategory.replace(/\s/g, '').toLowerCase()
        )
      ) {
        alert('This category already exists');
      } else {
        const categoryValue = newCategory
          .replace(/\s/g, '')
          .toLocaleLowerCase();
        const categoryLabel = newCategory;
        addCategory({ value: categoryValue, label: categoryLabel });
      }
    } else {
      alert('Please add a category');
    }
    resetInput();
  };

  const resetInput = () => {
    setNewCategory('');
  };
  return (
    <Box className={classes.root}>
      <Typography variant='h6'>{`${title} Categories`}</Typography>
      <Box className={classes.input}>
        <TextField
          id={id}
          size='small'
          margin='dense'
          className={classes.inputElement}
          label={`${title} Categories`}
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          variant='outlined'
        />
        <Button
          variant='contained'
          color='primary'
          size='small'
          onClick={handleAddCategory}
          className={classes.button}
        >
          Add
        </Button>
      </Box>
      <Typography className={classes.text}>
        If the category is in use it can't be deleted.
      </Typography>
      <ChipsSettings01
        data={categories}
        checkIfInUseElements={transactions.map(
          (transaction) => transaction.category
        )}
        deleteFunction={deleteCategory}
      />
    </Box>
  );
};

export default CategorySettings;
