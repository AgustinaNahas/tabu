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

import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import RedoIcon from '@material-ui/icons/Redo';
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

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

    const [openWin, setOpenWin] = React.useState(true);
    const [openFail, setOpenFail] = React.useState(true);
    const [openPass, setOpenPass] = React.useState(true);


    if (app.state.running){
        return (<div>
            <Carta carta={app.state.palabras[app.state.carta]}/>
            <ClickAwayListener onClickAway={() => setOpenWin(false)}>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={() => setOpenWin(false)}
                    open={openWin}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Acierto"
                >
                    <Fab size='large' className={`${classes.fabLeft} ${classes.fab}`} color="primary" onClick={() => {win(app)}}>
                        <DoneIcon/>
                    </Fab>
                </Tooltip>
            </ClickAwayListener>

            {/*<Fab className={`${classes.fabLeft} ${classes.fab}`} color="primary" onClick={() => {win(app)}}>*/}
            {/*    <CheckIcon/>*/}
            {/*</Fab>*/}
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
                <ClickAwayListener onClickAway={() => setOpenFail(false)}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={() => setOpenFail(false)}
                        open={openFail}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Tabu"
                    >
                        <Fab size='large' className={`${classes.fabTabu} ${classes.fab}`} color="primary"
                             onClick={() => {lose(app)}}>
                            <CloseIcon/>
                        </Fab>
                    </Tooltip>
                </ClickAwayListener>


            </ThemeProvider>
            <ClickAwayListener onClickAway={() => setOpenPass(false)}>
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    onClose={() => setOpenPass(false)}
                    open={openPass}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Pasar"
                >
                    <Fab size='large' className={`${classes.fabRight} ${classes.fab}`} color="secondary"
                         onClick={() => {pass(app)}}>
                        <RedoIcon/>
                    </Fab>
                </Tooltip>
            </ClickAwayListener>

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