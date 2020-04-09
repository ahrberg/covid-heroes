import React, { useState, useEffect } from "react";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";
interface Props {
  text: string;
}

const TextFade: React.FC<Props> = ({ text }) => {
  const [display, setDisplay] = useState(() => text);
  const [show, setShow] = useState(() => true);

  useEffect(() => {
    console.log(text);
    setShow(false);
    setTimeout(() => {
      setDisplay(text);
      setShow(true);
    }, 500);
  }, [text]);

  return (
    <Fade in={show}>
      <Typography align="center" variant="h2">
        {display}
      </Typography>
    </Fade>
  );
};

export default React.memo(TextFade);
