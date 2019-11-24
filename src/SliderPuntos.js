import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 12.5,
        label: '5',
    },
    {
        value: 25,
        label: '10',
    },
    {
        value: 50,
        label: '20',
    },
    {
        value: 100,
        label: '40',
    },
];


function valueLabelFormat(value) {
    return value*0.4;
}

function valuetext(value) {
    return `${value}°C`;
}

export default function DiscreteSlider(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography id="discrete-slider-restrict" gutterBottom>
                {props.modoPuntos ? "Puntos" : "Turnos"}
            </Typography>
            <Slider
                defaultValue={25}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={2.5}
                valueLabelDisplay="auto"
                marks={marks}
                onChange={(event, newValue) => {
                    props.guardarConfig('puntosFinales', newValue * 0.4);
                }}
            />
        </div>
    );
}
