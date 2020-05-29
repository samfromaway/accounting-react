import React, { Fragment } from 'react';
import AccountingSummary from '../../components/AccountingSummary';
import AccountingInput from '../../components/AccountingInput';
import AccountingTable from '../../components/AccountingTable';

import Box from '@material-ui/core/Box';

const AccountingIncome = () => {
  return (
    <Fragment>
      <AccountingSummary />
      <Box m={6} />
      <AccountingInput />
      <Box m={6} />
      <AccountingTable />
    </Fragment>
  );
};

export default AccountingIncome;
