import React from 'react';
import PropTypes from 'prop-types';
import CurrencySettings from '../components/CurrencySettings';
import CategorySettings from './CategorySettings';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '460px',
    marginTop: '1rem',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs({
  expensesTransactions,
  expensesCategories,
  deleteExpensesCategory,
  addExpensesCategory,
  incomeTransactions,
  incomeCategories,
  deleteIncomeCategory,
  addIncomeCategory,
  secondaryCurrencies,
  deleteSecondaryCurrencies,
  addSecondaryCurrencies,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
      >
        <Tab label='Income Categories' {...a11yProps(0)} />
        <Tab label='Expenses Categories' {...a11yProps(1)} />
        <Tab label='Currencies' {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} style={{ overflowY: 'auto' }}>
        <CategorySettings
          title={'Income'}
          id={'income'}
          transactions={incomeTransactions}
          categories={incomeCategories}
          deleteCategory={deleteIncomeCategory}
          addCategory={addIncomeCategory}
        />
      </TabPanel>
      <TabPanel value={value} index={1} style={{ overflowY: 'auto' }}>
        <CategorySettings
          title={'Expenses'}
          id={'expenses'}
          transactions={expensesTransactions}
          categories={expensesCategories}
          deleteCategory={deleteExpensesCategory}
          addCategory={addExpensesCategory}
        />
      </TabPanel>
      <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
        <CurrencySettings
          title={'Currencies'}
          id={'currencies'}
          transactions={expensesTransactions}
          currencies={secondaryCurrencies}
          deleteCurrency={deleteSecondaryCurrencies}
          addCurrency={addSecondaryCurrencies}
        />
      </TabPanel>
    </div>
  );
}
