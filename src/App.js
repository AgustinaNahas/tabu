import React from 'react';
import './App.css';
import Carta from './Carta';
import Header from './Header';
import Tiempo from './Tiempo';
import Equipo from './Equipo';
import {palabras} from './data';

import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PanToolIcon from '@material-ui/icons/PanTool';
import CheckIcon from '@material-ui/icons/Check';

import {withStyles} from '@material-ui/core/styles';

import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import {blue, green, red} from "@material-ui/core/colors";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue
  },
});

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
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
    left: '50vw',
  },
  button: {
    margin: theme.spacing(1),
  }
});

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      equipo: 0,
      puntos: [],
      running: false,
      carta: 0,
      finalizado: false,
      turno: 0,
      config: {
        tiempo: {
          minutes: 0,
          seconds: 30
        },
        modoPuntos: false,
        puntosFinales: 20
      }
    }
  }

  agregarEquipos(equipos){
    var arrayPuntos = this.state.puntos;

    equipos.forEach((equipo, index)=> {
      arrayPuntos[index] = {
        nombre: equipo,
        puntos: 0
      };
    });

    this.setState({puntos: arrayPuntos});
  };

  cambiarPuntos(equipoActual, puntosNuevos){
    var puntosActuales = this.state.puntos;
    puntosActuales[equipoActual].puntos = puntosNuevos;
    this.setState({puntos: puntosActuales});
  };

  timeSUp(){
    this.setState({running: false});
    if (this.state.config.modoPuntos ){
      this.setState({finalizado: this.state.config.puntosFinales <= this.state.puntos[this.state.equipo].puntos});
    } else this.setState({finalizado: this.state.config.puntosFinales <= this.state.turno});

    var equipoSiguiente = this.state.equipo + 1;
    var turno = this.state.turno;
    if (equipoSiguiente === this.state.puntos.length){
      equipoSiguiente = 0;
      turno += 1
    }
    this.setState({equipo: equipoSiguiente, turno: turno});
  }

  guardarConfig(key, value){
    var configAnterior = this.state.config;
    configAnterior[key] = value;
    this.setState({config: configAnterior});
  }

  render(){
    const {classes} = this.props;
    const {running, puntos, carta, equipo , config, finalizado} = this.state;

    if (finalizado) console.log("CHAU CHAU ADIOS");

    return (
        <ThemeProvider theme={theme}>
          <div className="App">
            {!puntos.length ? <Equipo agregarEquipos={(equipos) => this.agregarEquipos(equipos)}/> : ''}
            <Header nombre={puntos[equipo] ? puntos[equipo].nombre : ''} puntos={puntos[equipo] ? puntos[equipo].puntos : ''} guardarConfig={(key, value) => this.guardarConfig(key, value)}/>
            <Tiempo minutes={config.tiempo.minutes} seconds={config.tiempo.seconds} running={running} tiempo={()=> this.timeSUp() }/>
            {running ?
                <Carta carta={palabras[carta]}/>
                :
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => {
                  this.setState({ carta: Math.floor(Math.random() * palabras.length), running: true});
                }}>
                  Empezar
                </Button>
            }
            <Fab className={[classes.fab, classes.fabLeft]} color="primary" onClick={() => {
              if (running){
                this.setState({ carta: Math.floor(Math.random() * palabras.length)});
                this.cambiarPuntos(equipo, puntos[equipo].puntos + 1);
              }
            }}>
              <CheckIcon />
            </Fab>
            <ThemeProvider
                theme={theme => createMuiTheme({ ...theme,
                      palette: { ...theme.palette,
                        primary: red,
                      },
                    })
                }
            >
              <Fab className={[classes.fab, classes.fabTabu]} color="primary" onClick={() => {
                if (running){
                  this.setState({ carta: Math.floor(Math.random() * palabras.length)});
                  this.cambiarPuntos(equipo, puntos[equipo].puntos - 1);
                }
              }}>
                <PanToolIcon />
              </Fab>

            </ThemeProvider>
            <Fab className={[classes.fab, classes.fabRight]} color="secondary" onClick={() => { if (running) this.setState({carta: Math.floor(Math.random() * palabras.length)}) }}>
              <ArrowForwardIcon />
            </Fab>
          </div>
        </ThemeProvider>

    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);