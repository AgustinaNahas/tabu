import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  textField: {
    marginLeft: 20,
    marginRight: 20,
    },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function CustomizedDialogs(props) {
    const { classes, agregarEquipos } = props;
  const [open, setOpen] = React.useState(true);
  const [nombre, setNombre] = React.useState('');

  const handleClose = () => {
      if (nombre) {
        setOpen(false);
        agregarEquipos(['AGUS']);
      }
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Ingrese sus datos
        </DialogTitle>
        <DialogContent dividers>
            <TextField
                id="standard-name"
                label="Nombre"
                error={!nombre}
                className={classes.textField}
                value={nombre}
                onChange={(nombre) => setNombre(nombre.target.value)}
                margin="normal"
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Guardar
            </Button>
        </DialogActions>
    </Dialog>
  );
}


CustomizedDialogs.propTypes = {
    classes: PropTypes.object.isRequired,
    dismiss: PropTypes.func
  };
  
  export default withStyles(styles)(CustomizedDialogs);
  