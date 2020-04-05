import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { RouteComponentProps, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            onClick={() => history.push("/")}
            className={classes.title}
          >
            COVID-19 heroes
          </Typography>
          <Button color="inherit">Media</Button>
          <Button color="inherit" onClick={() => history.push("/about")}>
            Om oss
          </Button>
          <Button color="inherit">Så funkar det</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ButtonAppBar);
