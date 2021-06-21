import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Input} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '200px',
    height: '45px',
    boxShadow: 'rgba(98, 2, 238, 0.0001)',
    color: 'white',
    height: 48,
    padding: '0 30px',

    left: '20%',
    right: '0px',
    top: '70%',
    bottom: '0px',

    background: 'green ',
    borderRadius:'4px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Input className={classes.root}>ENTRAR</Input>;
}