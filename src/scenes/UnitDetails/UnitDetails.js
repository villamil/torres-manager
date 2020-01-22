import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import UnitInfo from "../../containers/UnitInfo";
import UnitMaintenanceDetailList from "../../containers/UnitMaintenanceDetailList";
import UnitWaterDetailList from "../../containers/UnitWaterDetailList";

const useStyles = makeStyles(theme => ({
  container: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: "100%"
  }
}));

export default function UnitDetails() {
  let history = useHistory();
  const classes = useStyles();
  function handleBackButton() {
    history.goBack();
  }
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Button onClick={handleBackButton}>Regresar</Button>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <UnitInfo number="101" section="A" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <UnitMaintenanceDetailList />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <UnitWaterDetailList />
        </Grid>
      </Grid>
    </Container>
  );
}
