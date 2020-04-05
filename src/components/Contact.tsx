import React from "react";
import { Button, Typography, Container, Grid, Box } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Box marginTop={10} marginBottom={4}>
        <Grid item>
          <Typography align="center" variant="h2">
            Kontakt
          </Typography>
        </Grid>
      </Box>
      <Grid item>
        <Typography align="center" variant="body1">
          hej@borama.se
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
