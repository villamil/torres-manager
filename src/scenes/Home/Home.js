import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Graphs from "../../containers/Graphs";
import Deposits from "../../containers/Deposits";

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

export default function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} lg={9}>
          <Paper className={classes.paper}>
            <Graphs />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={classes.paper}>
            <Deposits />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
