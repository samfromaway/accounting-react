import React, { Fragment } from 'react';
import AccountingSummaryTotal from './AccountingSummaryTotal';
import AccountingSummaryChart from './AccountingSummaryChart';
import { Grid } from '@material-ui/core';

const AccountingSummary = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
        <Grid item xs={4}>
          <AccountingSummaryChart />
        </Grid>
        <Grid item xs={12}>
          <AccountingSummaryTotal />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AccountingSummary;
