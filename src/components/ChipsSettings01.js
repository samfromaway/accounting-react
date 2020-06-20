import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

//https://material-ui.com/components/chips/

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    width: '600px',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipsSettings01 = ({ data, checkIfInUseElements, deleteFunction }) => {
  const classes = useStyles();

  const handleDelete = (chipToDelete) => () => {
    deleteFunction(chipToDelete.value);
  };

  return (
    <Paper component='ul' className={classes.root} variant={'outlined'}>
      {data.map((data) => {
        return (
          <li key={data.value}>
            <Chip
              label={data.label}
              onDelete={
                checkIfInUseElements.indexOf(data.value) > -1
                  ? null
                  : handleDelete(data)
              }
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipsSettings01;
