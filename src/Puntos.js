import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

function SimpleTable(props) {
    const classes = useStyles();
    const {equipos, turnos} = props;

    var i;
    var puntos = [];

    for (i = 0; i <= turnos; i++) {
        puntos[i] = equipos.map((equipo)=>{
            return equipo.puntos[i]});
    }

    return (
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {equipos.map((equipo, index)=>{
                            return (<TableCell key={index} align="right">{equipo.nombre}</TableCell>);
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {puntos.map((turno, index) => (
                        <TableRow key={index}>
                            {turno.map((punto, index2)=>
                                <TableCell key={index2} align="right">{punto}</TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    );
}


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
        const {classes, puntos, turnos} = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={12} className={classes.alignCenter}>
                            {/*{puntos.map((equipo, index) => {*/}
                            {/*    return (<Typography key={index} variant="h5" component="h2">*/}
                            {/*        {equipo.nombre}: {equipo.totales}*/}
                            {/*        </Typography>);*/}
                            {/*})}*/}
                            <SimpleTable equipos={puntos} turnos={turnos}/>
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