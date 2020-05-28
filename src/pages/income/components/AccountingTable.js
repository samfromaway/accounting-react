import React, { forwardRef, useContext, useState, useEffect } from 'react';
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
import TransactionsContext from '../context/transactions/transactionsContext';

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

const AccountingTable = () => {
  const { transactions, deleteTransaction, editTransaction } = useContext(
    TransactionsContext
  );

  const [columns, setColumns] = useState([
    { title: 'Date', field: 'date', type: 'date' },
    { title: 'Description', field: 'description' },
    {
      title: 'Currency',
      field: 'currency',
      lookup: { chf: 'CHF', usd: 'USD', cop: 'COP' },
    },
    { title: 'Amount', field: 'amount', type: 'numeric' },
    {
      title: 'CHF',
      field: 'chfAmount',
      type: 'numeric',
      editable: 'never',
    },
    { title: 'Document', field: 'document' },
    {
      title: 'Category',
      field: 'category',
      lookup: {
        hteServices: 'HTE Servcies',
        hteProducts: 'HTE Products',
        comissions: 'Comissions',
        devWorld: 'Dev World',
        youtube: 'Youtube',
      },
    },
  ]);

  return (
    <MaterialTable
      icons={tableIcons}
      title='Transactions'
      columns={columns}
      data={transactions}
      options={{}}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                editTransaction(newData, oldData._id);
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              deleteTransaction(oldData._id);
            }, 600);
          }),
      }}
    />
  );
};

export default AccountingTable;

//https://material-table.com/#/