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
    render() {
        const {classes, puntos} = this.props;

        console.log(puntos);

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} justify="center" className={classes.alignCenter}>
                            {puntos.map((equipo) => {
                                return (<Typography variant="h5" component="h2">
                                    {equipo.nombre}: {equipo.puntos}
                                    </Typography>);
                            })}
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