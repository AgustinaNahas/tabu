import React from 'react';

import Fab from '@material-ui/core/Fab';
import CallIcon from '@material-ui/icons/Call';
import CallEndIcon from '@material-ui/icons/CallEnd';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import {
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from "@material-ui/pickers";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    callIcon: {
        backgroundColor: '#ff3b3f',
        color: 'white',
        margin: '20px',
        '&:hover': {
            backgroundColor: '#D13134'
        }
    },
    callEndIcon: {
        backgroundColor: '#a9a9a9',
        color: 'white',
        margin: '20px',
        '&:hover': {
            backgroundColor: '#8B8B8B'
        }
    },
    plusOneIcon: {
        backgroundColor: '#cceaf4',
        color: 'white',
        margin: '20px',
        '&:hover': {
            backgroundColor: '#A7C0C8'
        }
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    alignCenter: {
        textAlign: "center"
    }
  });

 class View extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            minutes: 1,
            seconds: 0,
            millis: 0,
            running: false,
            tiempo: new Date()
        };


        this._handleEmpezar = this._handleEmpezar.bind(this);
        this._handleGuardar = this._handleGuardar.bind(this);
    }


    _handleEmpezar(event) {
        if (!this.state.running) {
            this.interval = setInterval(() => {
                this.tick();
            }, 100);

            this.setState({running: true})
        }
    }

    _handleGuardar(event) {
        if (this.state.running){
            clearInterval(this.interval);
            this.setState({running: false});
            this.update(0, 0, 1);
        }

        
    }
    
    tick() {
        let millis = this.state.millis - 1;
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (millis === -1) {
            millis = 9;
            seconds = seconds - 1;
        }

        if (seconds === -1) {
            millis = 9;
            seconds = 59;
            minutes = minutes - 1;
        }

        this.update(millis, seconds, minutes);
    }

    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }

    update(millis, seconds, minutes) {
        this.setState({
            millis: millis,
            seconds: seconds,
            minutes: minutes
        });
    }

    render() {
        const {classes} = this.props;

        let run = this.state.running === true;
        return (
            <Card className={classes.card}>
            <CardContent>

            <Grid container spacing={3}>
                <Grid item xs={12} justify="center" className={classes.alignCenter}>
                    <Typography variant="h5" component="h2">
                        <span className="mins">{this.zeroPad(this.state.minutes)}:</span> 
                        <span className="secs">{this.zeroPad(this.state.seconds)}</span> 
                        <span className="millis">.0{this.state.millis}</span>
                    </Typography>
                </Grid>
                <Grid item xs={12}  className={classes.alignCenter}>
                    <Fab className={classes.callIcon} aria-label="add" onClick={this._handleEmpezar}>
                        <CallIcon />
                    </Fab>

                    <Fab className={classes.callEndIcon} aria-label="add" onClick={this._handleGuardar}>
                        <CallEndIcon />
                    </Fab>
                </Grid>
            </Grid>
                
            </CardContent>
            </Card>);
    }
}

View.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(View);