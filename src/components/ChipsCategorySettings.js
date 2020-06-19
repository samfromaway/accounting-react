import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChipsCategories from './ChipsCategories';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.3rem',
  },
  button: {
    marginLeft: '1rem',
    marginTop: '5px',
  },
  text: {
    marginBottom: '0.3rem',
  },
}));

const ChipsCategorySettings = ({
  title,
  id,
  transactions,
  categories,
  deleteCategory,
  addCategory,
}) => {
  const [newCategory, setNewCategory] = useState('');
  const classes = useStyles();

  const handleAddCategory = () => {
    if (newCategory) {
      if (
        categories.some(
          (category) =>
            category.value === newCategory.replace(/\s/g, '').toLowerCase()
        )
      ) {
        alert('this category already exists');
      } else {
        const categoryValue = newCategory
          .replace(/\s/g, '')
          .toLocaleLowerCase();
        const categoryLabel = newCategory;
        addCategory({ value: categoryValue, label: categoryLabel });
      }
    } else {
      alert('please add a category');
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
      <ChipsCategories
        categories={categories}
        transactions={transactions}
        deleteCategory={deleteCategory}
      />
    </Box>
  );
};

export default ChipsCategorySettings;
