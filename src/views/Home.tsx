import React, { useState } from "react";
import { getPlace } from "../helpers/getPlace";
import Regions from "../components/Regions";
import { Button, Typography, Container, Grid, Box } from "@material-ui/core";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";
import TextFade from "../components/TextFade";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Divider from "../components/Divider";

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
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={3}
        style={{ marginTop: "40px" }}
      >
        <Grid item>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ height: "50px", marginLeft: "5px", marginRight: "5px" }}
              alt="Hero"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/man-superhero_1f9b8-200d-2642-fe0f.png"
            />
            <img
              style={{ height: "50px", marginLeft: "5px", marginRight: "5px" }}
              alt="Hero"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/superhero_emoji-modifier-fitzpatrick-type-4_1f9b8-1f3fd_1f3fd.png"
            />
            <img
              style={{ height: "50px", marginLeft: "5px", marginRight: "5px" }}
              alt="Hero"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/superhero_1f9b8.png"
            />
            <img
              style={{ height: "50px", marginLeft: "5px", marginRight: "5px" }}
              alt="Hero"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/man-superhero-medium-dark-skin-tone_1f9b8-1f3fe-200d-2642-fe0f.png"
            />
          </div>
          <Typography align="center" variant="h1">
            Stötta hjältarna i vården
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            size="large"
            href={`https://covidheroes.typeform.com/to/mGysro?id=${place.id}`}
          >
            Donera
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h3">ditt bidrag går till</Typography>
        </Grid>
        <Grid item>
          <TextFade text={place.name} />
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="caption">
            Nyfiken på att påverka valet själv?
          </Typography>
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
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => getNewPlace(region)}
              >
                Slumpa ny
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Box marginTop={6} marginBottom={4}>
        <HowItWorks />
      </Box>
      <Box marginTop={6} marginBottom={4}>
        <Team />
      </Box>
      <Box marginTop={6} marginBottom={4}>
        <Contact />
      </Box>
      <Box marginTop={10}></Box>
    </Container>
  );
};

export default Home;
