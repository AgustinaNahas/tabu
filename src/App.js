import React from 'react';
import './App.css';
import Carta from './Carta';
import Header from './Header';
import Tiempo from './Tiempo';
import Puntos from './Puntos';
import Equipo from './Equipo';
import Api from './Model/Api';

import {withStyles} from '@material-ui/core/styles';

import PropTypes from "prop-types";

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Botones from "./Botones";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#af5666',
            main: '#FA7C92',
            dark: '#fb96a7',
            contrastText: '#fff',
        },
        secondary: {
            light: '#4d899a',
            main: '#6EC5DC',
            dark: '#8bd0e3',
            contrastText: '#fff',
        },
    },
});

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            equipo: 0,
            puntos: [],
            running: false,
            carta: 0,
            finalizado: false,
            turno: 0,
            palabras: [],
            config: {
                tiempo: {
                    minutes: 0,
                    seconds: 30
                },
                modoPuntos: false,
                puntosFinales: 10
            }
        }
    }

    agregarEquipos(equipos) {
        var arrayPuntos = this.state.puntos;

        equipos.forEach((equipo, index) => {
            arrayPuntos[index] = {
                nombre: equipo,
                puntos: [],
                totales: 0
            };
        });

        this.setState({puntos: arrayPuntos});
    };

    cambiarPuntos(equipoActual, puntosNuevos) {
        var puntosActuales = this.state.puntos;
        if (puntosActuales[equipoActual].puntos[this.state.turno] === undefined) puntosActuales[equipoActual].puntos[this.state.turno] = 0;
        puntosActuales[equipoActual].puntos[this.state.turno] += puntosNuevos;
        puntosActuales[equipoActual].totales += puntosNuevos;
        this.setState({puntos: puntosActuales});
    };

    timeSUp() {
        this.setState({running: false});
        if (this.state.config.modoPuntos) {
            this.setState({finalizado: this.state.config.puntosFinales <= this.state.puntos[this.state.equipo].totales});
        }
        ;

        var equipoSiguiente = this.state.equipo + 1;
        var turno = this.state.turno;
        if (equipoSiguiente === this.state.puntos.length) {
            equipoSiguiente = 0;
            turno += 1
        }

        this.setState({equipo: equipoSiguiente, turno: turno});
        if (!this.state.config.modoPuntos) {
            this.setState({finalizado: this.state.config.puntosFinales <= this.state.turno});
        }

        var cantidad = this.state.config.tiempo.minutes * 120 + this.state.config.tiempo.seconds * 2;
        var self = this;

        Api.get(cantidad).then((response) => {
            self.setState({palabras: response.data});
            console.log(response.data)
        })

    }

    guardarConfig(key, value) {
        var configAnterior = this.state.config;
        configAnterior[key] = value;
        this.setState({config: configAnterior});
    }

    componentDidMount() {

        var cantidad = this.state.config.tiempo.minutes * 120 + this.state.config.tiempo.seconds * 2;
        var self = this;

        Api.get(cantidad).then((response) => {
            self.setState({palabras: response.data});
            console.log(response.data)
        })

    }

    render() {
        // const {classes} = this.props;
        const {running, puntos, equipo, config, finalizado} = this.state;

        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    {!puntos.length ? <Equipo agregarEquipos={(equipos) => this.agregarEquipos(equipos)}/> : ''}
                    <Header nombre={puntos[equipo] ? puntos[equipo].nombre : ''}
                            puntos={puntos[equipo] ? puntos[equipo].totales : ''}
                            guardarConfig={(key, value) => this.guardarConfig(key, value)}
                            running={running}
                    />
                    {finalizado ?
                        <Puntos puntos={puntos} turnos={this.state.turno}/>
                        :
                        <div>
                            <Tiempo minutes={config.tiempo.minutes} seconds={config.tiempo.seconds} running={running}
                                    tiempo={() => this.timeSUp()}/>
                                    <Botones app={this}/>
                        </div>
                    }
                </div>
            </ThemeProvider>

        );
    }
}


App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);