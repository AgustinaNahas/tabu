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

import Nombre from './Nombre';
import Slider from "./Slider";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(4),
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
        padding: theme.spacing(4),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(4),
    },
}))(MuiDialogActions);

class Opciones extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            open: true,
            nombres: ['']
        };

        this.handleClose = this.handleClose.bind(this);
        this.agregarEquipoNuevo = this.agregarEquipoNuevo.bind(this);
        this.cambiarNombre = this.cambiarNombre.bind(this);

    };

    handleClose() {
        if (this.state.nombres.length) {
            this.setState({open: false});
            // this.props.agregarEquipos(this.state.nombres);
        }
    };

    agregarEquipoNuevo(){
        var nombresNuevos = this.state.nombres;
        nombresNuevos.push('');
        this.setState({nombres: nombresNuevos});
    };

    cambiarNombre(index, nombre){
        var nombresNuevos = this.state.nombres;
        nombresNuevos[index] = nombre;
        this.setState({nombres: nombresNuevos});
    };

    render(){
        const {guardarConfig} = this.props;
        return (
            <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                    Opciones de juego
                </DialogTitle>
                <DialogContent dividers>
                    <Slider guardarConfig={guardarConfig}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                        Guardar
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

export default withStyles(styles)(Opciones);
  