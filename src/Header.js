import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Opciones from './Opciones';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
});

class ButtonAppBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {opciones: false};
    }

    render(){
        const {classes, guardarConfig} = this.props;
        const {opciones} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="none">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => this.setState({opciones: true})}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Equipo {this.props.nombre}
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            {this.props.puntos}
                        </Typography>
                    </Toolbar>
                </AppBar>
                {opciones ? <Opciones guardarConfig={guardarConfig}/> : ''}
            </div>
        );
    }

}


ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);