import React, { Fragment } from 'react';
import AccountingSummary from './AccountingSummary';
import AccountingInput from './AccountingInput';
import AccountingTable from './AccountingTable';

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
