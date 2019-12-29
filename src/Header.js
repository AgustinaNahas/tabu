import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import {pass, stop} from './Model/Gameplay'


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
        const {classes, guardarConfig, running, app} = this.props;
        const {opciones} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={() => {if (!running) this.setState({opciones: true})}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Equipo {this.props.nombre}
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            {this.props.puntos}
                        </Typography>
                        {
                            app.state.running ?
                                <IconButton edge="end" onClick={() => {stop(app)}}>
                                    {app.state.pause ? <PlayArrowIcon /> : <PauseIcon />}
                                </IconButton>  :''

                        }
                    </Toolbar>
                </AppBar>
                {opciones ? <Opciones open={opciones} close={() => {this.setState({opciones: false})}} guardarConfig={guardarConfig}/> : ''}
            </div>
        );
    }

}


ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);