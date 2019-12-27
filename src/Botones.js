import Carta from "./Carta";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {red} from "@material-ui/core/colors";
import React from "react";
import {makeStyles} from '@material-ui/core/styles';

import { win, lose, pass, start } from './Model/Gameplay'
import Puntos from './Puntos'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PanToolIcon from '@material-ui/icons/PanTool';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
    },
    fabLeft: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabRight: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
    fabTabu: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: '45vw',
    },
    button: {
        margin: theme.spacing(1),
        position: 'absolute',
        width: '96%',
        bottom: theme.spacing(2),
        left: 0,

    }
}));

export default function Botones(props) {
    const classes = useStyles();
    const { app} = props;

    if (app.state.running){
        return (<div>
            <Carta carta={app.state.palabras[app.state.carta]}/>
            <Fab className={`${classes.fabLeft} ${classes.fab}`} color="primary" onClick={() => {win(app)}}>
                <CheckIcon/>
            </Fab>
            <ThemeProvider
                theme={theme => createMuiTheme({
                    ...theme,
                    palette: {
                        ...theme.palette,
                        primary: red,
                    },
                })
                }
            >
                <Fab className={`${classes.fabTabu} ${classes.fab}`} color="primary"
                     onClick={() => {lose(app)}}>
                    <PanToolIcon/>
                </Fab>

            </ThemeProvider>
            <Fab className={`${classes.fabRight} ${classes.fab}`} color="secondary"
                 onClick={() => {pass(app)}}>
                <ArrowForwardIcon/>
            </Fab>
        </div>)
    }
    if (!app.state.finalizado){
        return (
            <div>
                <Puntos puntos={app.state.puntos} turnos={app.state.turno}/>

                <Button variant="contained" color="secondary" className={classes.button}
                        onClick={() => {start(app)}}>
                    <Typography variant="h6" component="p">
                        Empezar
                    </Typography>
                </Button>
            </div>
);
    }
    return '';
}