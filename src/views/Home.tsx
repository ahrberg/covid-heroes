import React, { useState } from "react";
import { getPlace } from "../helpers/getPlace";
import Regions from "../components/Regions";
import { Button, Typography, Container, Grid } from "@material-ui/core";

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
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
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

        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => getNewPlace(region)}
          >
            Donera
          </Button>
        </Grid>
        <Grid item>
          <Regions onChange={handleRegionChange} />
          <Button color="primary" onClick={() => getNewPlace(region)}>
            Slumpa ny
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
