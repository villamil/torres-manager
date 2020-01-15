import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import UnitsList from "../../containers/UnitsList";

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

export default function Units() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <UnitsList />
        </Grid>
      </Grid>
    </Container>
  );
}
