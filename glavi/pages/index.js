import Header from "./../Components/Header/index";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./../Components/Card/index";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width = device-width, initial-scale = 1"
        />
      </Head>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
          <Grid item xs>
            <Card>xs</Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
