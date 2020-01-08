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
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import Slider from "./Slider";
import SliderPuntos from "./SliderPuntos";
import Switch from "./Switch";

const styles = theme => ({
    root: {
        margin: 0,
        padding: 20,
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
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
        padding: theme.spacing(4),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(4),
    },
    elemento: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}))(MuiDialogActions);

const stylesOpciones = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(4),
    },
    divisor: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});


class Opciones extends React.Component {

    handleClose() {
        this.props.close();
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render(){
        const {guardarConfig, open, classes} = this.props;

        return (
            <Dialog onClose={() => this.handleClose()} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={() => this.handleClose()}>
                    <Typography variant="h6" component="p">
                        Opciones de juego
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Slider className={classes.elemento} guardarConfig={(tiempo) => {guardarConfig('tiempo', tiempo)}}/>
                    <Divider variant="middle" className={classes.divisor}/>
                    <Switch className={classes.elemento} change={(valor) => {guardarConfig('modoPuntos', !valor);}}/>
                    <Divider variant="middle" className={classes.divisor}/>
                    <SliderPuntos className={classes.elemento} guardarConfig={guardarConfig}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClose()} color="secondary">
                        <Typography variant="h6" component="p">
                            Guardar
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        );

    }
}


Opciones.propTypes = {
    classes: PropTypes.object.isRequired,
    dismiss: PropTypes.func
};

export default withStyles(stylesOpciones)(Opciones);
  