import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carta from './Carta';
import Header from './Header';
import Tiempo from './Tiempo';

import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import {purple} from '@material-ui/core/colors/purple';

const useStyles = makeStyles(theme => ({
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


}));

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

function App() {
  const classes = useStyles();
  const [indexCarta, setIndexCarta] = React.useState(0);
  const [equipo, setEquipo] = React.useState(0);
  const [puntos, setPuntos] = React.useState(0);

  return (
    <div className="App">
      <Header puntos={puntos}/>
      <Tiempo />
      <Carta carta={palabras[indexCarta]}/>
      <Fab className={[classes.fab, classes.fabLeft]} color="primary" onClick={() => {
        setIndexCarta(Math.floor(Math.random() * palabras.length));
        setPuntos(puntos + 1);
      }}>
        <CheckIcon />
      </Fab>
      <Fab className={[classes.fab, classes.fabRight]} color="secondary" onClick={() => { setIndexCarta(Math.floor(Math.random() * palabras.length)) }}>
        <ArrowForwardIcon />
      </Fab>
    </div>
  );
}

export default App;
