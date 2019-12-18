import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const carta = props.carta;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Palabra
                </Typography>
                <Typography variant="h5" component="h2">
                    {carta.palabra}
                </Typography>
                <br />
                {carta.words.map((tabu, index)=>
                    <Typography key={index} variant="body2" component="p">

                        {tabu}
                        <br />
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small">Ayuda</Button>
            </CardActions>
        </Card>
    );
}
