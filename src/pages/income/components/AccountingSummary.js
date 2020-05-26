import React, { Fragment } from 'react';
import AccountingSummaryChart from './AccountingSummaryChart';
import { Grid } from '@material-ui/core';

const AccountingSummary = () => {
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
