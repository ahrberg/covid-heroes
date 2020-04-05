import React from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Box,
  makeStyles,
  createStyles,
  CardActionArea,
  Card,
  CardMedia,
} from "@material-ui/core";

import logo from "../images/logo_fake.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const HowItWorks = () => {
  const classes = useStyles();

  const card = (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={logo}
          title="logo"
        />
      </CardActionArea>
    </Card>
  );

  return (
    <Box marginTop={8}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2">Partners</Typography>
        </Grid>
        <Box marginTop={3}>
          <Grid
            container
            spacing={5}
            direction="row"
            className={classes.root}
            justify="center"
            alignItems="center"
          >
            <Grid item>{card}</Grid>
            <Grid item>{card}</Grid>
            <Grid item>{card}</Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
