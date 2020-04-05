import React from "react";
import { Button, Typography, Container, Grid, Box } from "@material-ui/core";

const HowItWorks = () => {
  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      <Box marginTop={10} marginBottom={4}>
        <Grid item>
          <Typography align="center" variant="h2">
            Så funkar det
          </Typography>
        </Grid>
      </Box>
      <Grid item>
        <Typography align="center" variant="body1">
          Många jobbar hårt för att vi ska ta oss igenom Covid-19-pandemin så
          bra som möjligt. Hjälp till att stötta dom som jobbar hårt genom att
          skänka ett bidrag som gör deras vardag lite enklare. Stötta tex med en
          fruktkorg till en intentivvårdsavdelning så att personalen kan få lite
          ny energi mellan varven.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="body1">
          <ol>
            <li>Slumpa fram den grupp du vill stötta</li>
            <li>Välj vad du vill donera</li>
            <li>Betala med kort</li>
            <li>Din donation kommer gruppen till nytta inom några få dagar</li>
          </ol>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
