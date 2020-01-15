import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../components/Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function UnitInfo(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h3" color="primary" gutterBottom>
        {props.number}
        {props.section}
      </Typography>

      <Typography color="textSecondary" component="p" variant="h6">
        Mantenimiento: $3,024.00
      </Typography>
      <Typography color="textSecondary" component="p" variant="h6">
        Agua: $3,024.00
      </Typography>
    </React.Fragment>
  );
}
