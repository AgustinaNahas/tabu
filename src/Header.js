import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/styles";

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
    }

    render(){
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="none">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Equipo {this.props.nombre}
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                            {this.props.puntos}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}


ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);