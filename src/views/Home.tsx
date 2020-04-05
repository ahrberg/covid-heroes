import React, { useState } from "react";
import { getPlace } from "../helpers/getPlace";
import Regions from "../components/Regions";
import { Button, Typography, Container, Grid, Box } from "@material-ui/core";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";

const Home: React.FC = () => {
  const [place, setPlace] = useState(getPlace("", ""));
  const [region, setRegion] = useState<string>("");

  const handleRegionChange = (regionId: string) => {
    setRegion(regionId);
    getNewPlace(regionId);
  };

  const getNewPlace = (regionId?: string) => {
    if (regionId) {
      setPlace(getPlace(regionId, place.id));
    } else {
      setPlace(getPlace("", place.id));
    }
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Box marginTop={10} marginBottom={6}>
          <Grid item>
            <Typography align="center" variant="h2">
              Grattis du ska ge en donation till
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant="h1">
              {place.name}
            </Typography>
          </Grid>
        </Box>
        <Grid item>
          <Box margin={0}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              href={`https://naramsin.typeform.com/to/mGysro?id=${place.id}`}
            >
              Donera
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box marginTop={5}>
            <Typography variant="caption">
              Nyfiken på att påverka valet själv?
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            spacing={2}
          >
            <Grid item>
              <Regions onChange={handleRegionChange} />
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="secondary"
                onClick={() => getNewPlace(region)}
              >
                Slumpa ny
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Partners />
      <HowItWorks />
    </Container>
  );
};

export default Home;
