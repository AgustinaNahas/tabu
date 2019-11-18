import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    card: {
        minWidth: 275,
        margin: 20
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
            minutes: props.minutes,
            seconds: props.seconds,
            millis: 0
        };

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

        if (minutes<0 ){
            if (this.props.running) this.props.tiempo();
            clearInterval(this.interval);
        } else {
            this.update(millis, seconds, minutes);
        }
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

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.running !== nextProps.running){

            if (nextProps.running){
                this.setState({
                    minutes: nextProps.minutes,
                    seconds: nextProps.seconds,
                    millis: 0
                });
            }

            this.interval = setInterval(() => {
                this.tick();
            }, 100);
        }
        return true;
    }

    render() {
        const {classes} = this.props;

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
                    </Grid>

                </CardContent>
            </Card>);
    }
}

View.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(View);