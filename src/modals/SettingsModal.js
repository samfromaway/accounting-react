import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChipsCategorySettings from '../components/ChipsCategorySettings';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  const { incomeTransactions } = useContext(IncomeTransactionsContext);
  const { expensesTransactions } = useContext(ExpensesTransactionsContext);
  const {
    incomeCategories,
    deleteIncomeCategory,
    addIncomeCategory,
    expensesCategories,
    deleteExpensesCategory,
    addExpensesCategory,
  } = useContext(CategoriesContext);
  const classes = useStyles();

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
          <ChipsCategorySettings
            title={'Income'}
            id={'income'}
            transactions={incomeTransactions}
            categories={incomeCategories}
            deleteCategory={deleteIncomeCategory}
            addCategory={addIncomeCategory}
          />
          <ChipsCategorySettings
            title={'Expenses'}
            id={'expenses'}
            transactions={expensesTransactions}
            categories={expensesCategories}
            deleteCategory={deleteExpensesCategory}
            addCategory={addExpensesCategory}
          />
        </div>
      </Fade>
    </Modal>
  );
};

export default SettingsModal;
