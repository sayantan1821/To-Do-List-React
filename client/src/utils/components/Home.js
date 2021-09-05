import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to='/login'>
          <Button variant="contained" color="primary">
            Log In
          </Button>
        </Link>
        <Link to='/register'>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
