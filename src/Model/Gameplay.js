export function win(app){
    if (app.state.running) {
        app.setState({carta: Math.floor(Math.random() * app.state.palabras.length)});
        app.cambiarPuntos(app.state.equipo, 1);
    }
}

export function lose(app){
    if (app.state.running) {
        app.setState({carta: Math.floor(Math.random() * app.state.palabras.length)});
        app.cambiarPuntos(app.state.equipo, -1);
    }
}

export function pass(app){
    if (app.state.running) {
        app.setState({carta: Math.floor(Math.random() * app.state.palabras.length)});
    }
}

export function start(app){
    app.setState({   carta: Math.floor(Math.random() * app.state.palabras.length), running: true });
}

export function stop(app){
    if (app.state.running) app.setState({   pause: !app.state.pause });
}