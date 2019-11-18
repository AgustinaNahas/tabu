import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';


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
        marginTop: 16
    },
    textField: {
        marginLeft: 20,
        marginRight: 20,
    },
    margin: {
        marginTop: theme.spacing(2),
    },
});

function CustomizedDialogs(props) {
    const { classes, agregarEquipoNuevo, setEquipo } = props;
    const [nombre, setNombre] = React.useState('');

    return (
        <div>
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
            <IconButton aria-label="delete" className={classes.margin} onClick={() => agregarEquipoNuevo()}>
                <AddIcon fontSize="small" />
            </IconButton>
        </div>
    );
}


CustomizedDialogs.propTypes = {
    classes: PropTypes.object.isRequired,
    dismiss: PropTypes.func
};

export default withStyles(styles)(CustomizedDialogs);
  