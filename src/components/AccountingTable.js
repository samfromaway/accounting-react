import React, { forwardRef, useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { currencyEx } from '../functions/currencyEx';
import { transactionsInputValidation } from '../functions/transactionsInputValidation';
import CurrenciesContext from '../context/currencies/currenciesContext';

const tableIcons = {
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const AccountingTable = ({
  transactions,
  getTransactions,
  deleteTransaction,
  editTransaction,
  categories,
}) => {
  const { secondaryCurrencies } = useContext(CurrenciesContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  const currenciesFormated = () => {
    const currenciesFormated = {};
    secondaryCurrencies.forEach((e) => {
      currenciesFormated[e.value] = e.label;
    });
    return currenciesFormated;
  };

  const categoriesFormated = () => {
    const categoriesFormated = {};
    categories.forEach((e) => {
      categoriesFormated[e.value] = e.label;
    });
    return categoriesFormated;
  };

  const columns = [
    { title: 'Date', field: 'date', type: 'date', defaultSort: 'desc' },
    { title: 'Description', field: 'description' },
    {
      title: 'Currency',
      field: 'currency',
      lookup: currenciesFormated(),
    },

    {
      title: 'Amount',
      field: 'amount',
      type: 'numeric',
      cellStyle: { textAlign: 'left' },
    },
    {
      title: 'Ex Rate',
      field: 'exRate',
      type: 'numeric',
      cellStyle: { textAlign: 'left' },
    },
    {
      title: 'CHF',
      field: 'chfAmount',
      type: 'currency',
      currencySetting: { currencyCode: 'chf' },
      editable: 'never',
      cellStyle: { textAlign: 'left' },
    },
    { title: 'Document', field: 'document' },
    {
      title: 'Category',
      field: 'category',
      lookup: categoriesFormated(),
    },
  ];

  const formatNewData = (newData, oldData) => {
    const formatedAmount = +newData.amount;
    const formatedDate = new Date(newData.date).toISOString();
    const formatedChfAmount = +newData.amount * newData.exRate;
    const formatedExRate = +newData.exRate;
    const formatedNewData = {
      ...newData,
      id: oldData.id,
      amount: formatedAmount,
      exRate: formatedExRate,
      chfAmount: formatedChfAmount,
      date: formatedDate,
    };
    return formatedNewData;
  };

  return (
    <MaterialTable
      icons={tableIcons}
      title='Transactions'
      columns={columns}
      data={transactions}
      options={{
        headerStyle: { textAlign: 'left' },
      }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (newData.currency === oldData.currency) {
                if (transactionsInputValidation(newData)) {
                  editTransaction(formatNewData(newData, oldData), oldData.id);
                }
              } else {
                if (newData.exRate === oldData.exRate) {
                  alert('Please adjust EX Rate after changing the currency');
                } else {
                  if (transactionsInputValidation(newData)) {
                    editTransaction(
                      formatNewData(newData, oldData),
                      oldData.id
                    );
                  }
                }
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteTransaction(oldData.id);
            }, 600);
          }),
      }}
    />
  );
};

export default AccountingTable;

//https://material-table.com/#/
