import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";

const Team = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Box marginTop={10} marginBottom={4}>
        <Grid item>
          <Typography align="center" variant="h2">
            Teamet bakom
          </Typography>
        </Grid>
      </Box>
      <Grid item>
        <Typography align="center" variant="body1">
          Vi är ett litet team med utvecklare och produktutvecklare som med
          startskottet{" "}
          <a href="https://www.hackthecrisis.se/">Hack The Crisis Sweden</a>
          försöker bridra med det vi kan för att förbättra rådande situation med
          Covid-19. Allt såklart frivilligt och utan vinning. Vill du vara med
          och hjälpa till är du välkommen att höra av dig! /Georg, Harris &
          Naramsin
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Team;
