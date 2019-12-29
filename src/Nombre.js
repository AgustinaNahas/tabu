import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
    button: {
        marginTop: 20
    },
    textField: {
        marginLeft: 20,
        marginRight: 20,
        width: '50%'
    },
    margin: {
        marginTop: 30,
        padding: 8
    },
});

function CustomizedDialogs(props) {
    const { classes, nombreInicial, agregarEquipoNuevo, setEquipo, quitarEquipo, index, cantidad } = props;
    const [nombre, setNombre] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        setNombre(nombreInicial);
    }, [nombreInicial]);

    console.log(index);



    return (
        <div>
            <IconButton disabled={index === 0} aria-label="delete" className={classes.margin} onClick={() => quitarEquipo()}>
                <RemoveIcon fontSize="small" />
            </IconButton>
            <TextField
                id="standard-name"
                label="Nombre"
                error={!nombre}
                className={classes.textField}
                value={nombre}
                margin="normal"
                onChange={(nombre) => {
                    setNombre(nombre.target.value);
                    setEquipo(nombre.target.value);
                }}
            />

            <ClickAwayListener onClickAway={handleTooltipClose}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={handleTooltipClose}
                        open={open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Max 5 equipos"
                    >
                        <IconButton aria-label="delete" className={classes.margin} onClick={() => {if (cantidad < 5) agregarEquipoNuevo(); else handleTooltipOpen()}}>
                            <AddIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
            </ClickAwayListener>
        </div>
    );
}


CustomizedDialogs.propTypes = {
    classes: PropTypes.object.isRequired,
    dismiss: PropTypes.func
};

export default withStyles(styles)(CustomizedDialogs);
  