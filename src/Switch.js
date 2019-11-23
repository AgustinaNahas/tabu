import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

export default function SwitchesSize(props) {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
    props.change(checked);
  };

  return (
    <FormGroup>
        <Typography gutterBottom>
            Modo de juego
        </Typography>

      <FormControlLabel
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label={checked ? "Puntos" : "Turnos"}
      />
    </FormGroup>
  );
}
