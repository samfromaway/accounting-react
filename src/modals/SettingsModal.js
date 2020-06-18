import React, { useState, useContext } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import ChipsCategories from '../components/ChipsCategories';
import IncomeTransactionsContext from '../context/income/incomeTransactionsContext';
import ExpensesTransactionsContext from '../context/expenses/expensesTransactionsContext';
import CategoriesContext from '../context/categories/categoriesContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: '600px',
    height: '600px',
    padding: theme.spacing(2, 4, 3),
    '&:focus': {
      outline: 'none',
    },
  },
}));

const SettingsModal = ({ openSettingsModal, handleCloseSettingsModal }) => {
  const [newIncomeCategory, setNewIncomeCategory] = useState('');
  const [newExpensesCategory, setNewExpensesCategory] = useState('');
  const { incomeTransactions } = useContext(IncomeTransactionsContext);
  const { expensesTransactions } = useContext(ExpensesTransactionsContext);
  const {
    incomeCategories,
    expensesCategories,
    deleteIncomeCategory,
    addIncomeCategory,
    deleteExpensesCategory,
    addExpensesCategory,
  } = useContext(CategoriesContext);
  const classes = useStyles();

  const handleAddIncomeCategory = () => {
    if (newIncomeCategory) {
      if (
        incomeCategories.some(
          (category) =>
            category.value ===
            newIncomeCategory.replace(/\s/g, '').toLowerCase()
        )
      ) {
        alert('this category already exists');
      } else {
        const categoryValue = newIncomeCategory
          .replace(/\s/g, '')
          .toLocaleLowerCase();
        const categoryLabel = newIncomeCategory;
        addIncomeCategory({ value: categoryValue, label: categoryLabel });
      }
    } else {
      alert('please add a category');
    }
  };

  const handleAddExpensesCategory = () => {
    if (newExpensesCategory) {
      if (
        expensesCategories.some(
          (category) =>
            category.value ===
            newExpensesCategory.replace(/\s/g, '').toLowerCase()
        )
      ) {
        alert('this category already exists');
      } else {
        const categoryValue = newExpensesCategory
          .replace(/\s/g, '')
          .toLocaleLowerCase();
        const categoryLabel = newExpensesCategory;
        addExpensesCategory({ value: categoryValue, label: categoryLabel });
      }
    } else {
      alert('please add a category');
    }
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={openSettingsModal}
      onClose={handleCloseSettingsModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 100,
      }}
    >
      <Fade in={openSettingsModal}>
        <div className={classes.paper}>
          <Typography variant='h4'>Settings</Typography>

          <Box className={classes.box}>
            <Typography variant='h5'>Income Categories</Typography>
            <TextField
              id='incomeCategory'
              label='Category'
              value={newIncomeCategory}
              onChange={(e) => setNewIncomeCategory(e.target.value)}
              variant='outlined'
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.cancelBox}
              size='small'
              onClick={handleAddIncomeCategory}
            >
              Add
            </Button>
            <Typography>
              If the category is in use it can't be deleted.
            </Typography>
            <ChipsCategories
              categories={incomeCategories}
              transactions={incomeTransactions}
              deleteCategory={deleteIncomeCategory}
            />
          </Box>
          <Box className={classes.box}>
            <Typography variant='h5'>Expenses Categories</Typography>
            <TextField
              id='expensesCategory'
              label='Category'
              value={newExpensesCategory}
              onChange={(e) => setNewExpensesCategory(e.target.value)}
              variant='outlined'
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.cancelBox}
              size='small'
              onClick={handleAddExpensesCategory}
            >
              Add
            </Button>
            <Typography>
              If the category is in use it can't be deleted.
            </Typography>
            <ChipsCategories
              categories={expensesCategories}
              transactions={expensesTransactions}
              deleteCategory={deleteExpensesCategory}
            />
          </Box>
        </div>
      </Fade>
    </Modal>
  );
};

export default SettingsModal;
