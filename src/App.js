import React from 'react';
import './App.css';
import Carta from './Carta';
import Header from './Header';
import Tiempo from './Tiempo';
import Equipo from './Equipo';

import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';

import {makeStyles, withStyles} from '@material-ui/core/styles';

import {purple} from '@material-ui/core/colors/purple';
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';

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
    backgroundColor: purple
  },
  fabRight: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  fabTabu: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },



});

const palabras = [
  {
    palabra: 'Sueño',
    tabues: [
      'Dormir',
      'Cama',
      'Noche',
      'Soñar',
      'Roncar'
    ]
  },
  {
    palabra: 'Angel',
    tabues: [
      'Paraíso',
      'Cielo',
      'Diablo',
      'Demonio',
      'Alas'
    ]
  },
  {
    palabra: 'Corpiño',
    tabues: [
      'Mujer',
      'Pechos',
      'Sostén',
      'Ropa',
      'Bombacha'
    ]
  },
  {
    palabra: 'Cine',
    tabues: [
      'Película',
      'Pantalla',
      'Filmar',
      'Proyectar',
      'Cámara'
    ]
  },
  {
    palabra: 'Nido',
    tabues: [
      'Pájaro',
      'Pichones',
      'Huevos',
      'Casa',
      'Árbol'
    ]
  },
  {
    palabra: 'Bandoneón',
    tabues: [
      'Acordeón',
      'Música',
      'Instrumento',
      'Tango',
      'Piazzola'
    ]
  },
  {
    palabra: 'Corpiño',
    tabues: [
      'Mujer',
      'Pechos',
      'Sostén',
      'Ropa',
      'Bombacha'
    ]
  },
  {
    palabra: 'Futbol',
    tabues: [
      'Pelota',
      'Deporte',
      'Maradona',
      'Cancha',
      'Messi'
    ]
  },
  {
    palabra: 'Pictionary',
    tabues: [
      'Juego',
      'Dibujar',
      'Lapiz',
      'Tablero',
      'Marca'
    ]
  },
  {
    palabra: 'Guardapolvo',
    tabues: [
      'Blanco',
      'Escuela',
      'Primaria',
      'Maestra',
      'Alumno'
    ]
  },
  {
    palabra: 'Palmera',
    tabues: [
      'Datil',
      'Coco',
      'Arbol',
      'Mono',
      'Trópico'
    ]
  },
  {
    palabra: 'Navidad',
    tabues: [
      'Diciembre',
      'Papa Noel',
      'Villancicos',
      'Arbolito',
      'Nacimiento'
    ]
  },
  {
    palabra: 'Comer',
    tabues: [
      'Comida',
      'Boca',
      'Hambre',
      'Heladera',
      'Masticar'
    ]
  },
  {
    palabra: 'Mosquito',
    tabues: [
      'Picar',
      'Rascar',
      'Insecto',
      'Raid',
      'Espiral'
    ]
  },
  {
    palabra: 'Carga',
    tabues: [
      'Bultos',
      'Pesado',
      'Camión',
      'Barco',
      'Tren'
    ]
  },
  {
    palabra: 'Cuna',
    tabues: [
      'Bebé',
      'Dormir',
      'Canción',
      'Barras',
      'Muebles'
    ]
  },
  {
    palabra: 'Roncar',
    tabues: [
      'Noche',
      'Ruido',
      'Nariz',
      'Dormir',
      'Molestar'
    ]
  },
  {
    palabra: 'Micro escolar',
    tabues: [
      'Colegio',
      'Chicos',
      'Vehículo',
      'Niño',
      'Naranja'
    ]
  },
  {
    palabra: 'Tenis',
    tabues: [
      'Deporte',
      'Raqueta',
      'Cancha',
      'Red',
      'Pelota'
    ]
  },
];

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      equipo: 0,
      puntos: [],
      running: false,
      carta: 0
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
    var equipoSiguiente = this.state.equipo + 1;
    if (equipoSiguiente == this.state.puntos.length)
      equipoSiguiente = 0;
    this.setState({equipo: equipoSiguiente});
  }

  render(){
    const {classes} = this.props;
    const {running, puntos, carta, equipo } = this.state;

    return (
        <div className="App">
          {!puntos.length ? <Equipo agregarEquipos={(equipos) => this.agregarEquipos(equipos)}/> : ''}
          <Header nombre={puntos[equipo] ? puntos[equipo].nombre : ''} puntos={puntos[equipo] ? puntos[equipo].puntos : ''}/>
          <Tiempo minutes={0} seconds={10} running={running} tiempo={()=> this.timeSUp() }/>
          {running ?
              <Carta carta={palabras[carta]}/>
              :
              <Button variant="contained" color="secondary" className={classes.button} onClick={() => {
                this.setState({running: true});
                console.log(this.state);
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
          <Fab className={[classes.fab, classes.fabRight]} color="secondary" onClick={() => { if (running) this.setState({carta: Math.floor(Math.random() * palabras.length)}) }}>
            <ArrowForwardIcon />
          </Fab>
        </div>
    );

  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);