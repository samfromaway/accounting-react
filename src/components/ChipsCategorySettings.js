import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChipsCategories from './ChipsCategories';

const ChipsCategorySettings = ({
  title,
  id,
  transactions,
  categories,
  deleteCategory,
  addCategory,
}) => {
  const [newCategory, setNewCategory] = useState('');

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
    <Box>
      <Typography variant='h5'>{`${title} Categories`}</Typography>
      <TextField
        id={id}
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
      >
        Add
      </Button>
      <Typography>If the category is in use it can't be deleted.</Typography>
      <ChipsCategories
        categories={categories}
        transactions={transactions}
        deleteCategory={deleteCategory}
      />
    </Box>
  );
};

export default ChipsCategorySettings;
