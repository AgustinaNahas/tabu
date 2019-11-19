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
        label: '15s',
    },
    {
        value: 25,
        label: '30s',
    },
    {
        value: 50,
        label: '1min',
    },
    {
        value: 100,
        label: '2min',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

// function valueLabelFormat(value) {
//     return marks.findIndex(mark => mark.value === value) + 1;
// }

export default function DiscreteSlider(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin} />
            <Typography id="discrete-slider-restrict" gutterBottom>
                Tiempo
            </Typography>
            <Slider
                defaultValue={30}
                // valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                // valueLabelDisplay="auto"
                marks={marks}
                onChange={(event, newValue) => {
                    props.guardarConfig(
                        {
                            minutes: Math.trunc(newValue / 50) ,
                            seconds: (newValue % 50) * 1.2
                        }
                    );
                }}
            />
        </div>
    );
}
