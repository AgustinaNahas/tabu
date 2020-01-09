export function win(app){
    if (app.state.running) {
        app.setState({carta: Math.floor(Math.random() * app.state.palabras.length)});
        points(app.state.equipo, 1, app);
    }
}

export function lose(app){
    if (app.state.running) {
        app.setState({carta: Math.floor(Math.random() * app.state.palabras.length)});
        points(app.state.equipo, -1, app);
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

export function points(team, points, app){
    var puntosActuales = app.state.puntos;

    if (puntosActuales[team].puntos[app.state.turno] === undefined)
        puntosActuales[team].puntos[app.state.turno] = 0;
    puntosActuales[team].puntos[app.state.turno] += points;
    puntosActuales[team].totales += points;

    localStorage.setItem('equipo_' + team, JSON.stringify(puntosActuales[team]));
    app.setState({puntos: puntosActuales});

}

export function getPoints(app){
    var arrayPuntos = [];
    for(var key in localStorage){
        console.log(key);
        if (/^equipo_\d*$/g.test(key)){
            arrayPuntos.push(JSON.parse(localStorage.getItem(key)));
        }
    }
    app.setState({puntos: arrayPuntos});
}

export function reset(app){
    end();

    var arrayPuntos = [];

    app.setState({puntos: arrayPuntos});
}


export function end(){
    for(var key in localStorage){
        if (/^equipo_\d*$/g.test(key)){
            localStorage.removeItem(key);
        }
    }
}
