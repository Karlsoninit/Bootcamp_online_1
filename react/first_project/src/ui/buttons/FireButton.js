import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export function FireButton({ btnTitle }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        {btnTitle}
      </Button>
    </div>
  );
}

FireButton.propTypes = {
  btnTitle: PropTypes.string.isRequired,
};
