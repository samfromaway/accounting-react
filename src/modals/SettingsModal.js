import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SettingsTabs from '../components/SettingsTabs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '900px',
    height: '600px',
    position: 'relative',
    padding: theme.spacing(2, 4, 3),
    '&:focus': {
      outline: 'none',
    },
  },
  closeButton: {
    position: 'absolute',
    right: '15px',
    bottom: '15px',
  },
}));

const SettingsModal = ({ openSettingsModal, handleCloseSettingsModal }) => {
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
        <Paper className={classes.paper}>
          <Typography variant='h5'>Settings</Typography>
          <Divider style={{ margin: '0.5rem 0 1rem 0 ' }} />
          <SettingsTabs />

          <Button
            className={classes.closeButton}
            color='default'
            onClick={handleCloseSettingsModal}
          >
            Close
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
};

export default SettingsModal;
