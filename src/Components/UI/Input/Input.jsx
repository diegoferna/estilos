import React from 'react';
import {InputLabel, IconButton,InputAdornment, makeStyles, ThemeProvider} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
   root:{
     width:'328px',
     height: '56px',
     margin: '5px',
     background:' rgba(255, 255, 255, 0.87)',
     border: '1px solid #3333330',
   }
})


export const EntradaEmail = (props) => {

  const classes = useStyles();
  const [email, setEmail] = useState("");


  return(
      <FormControl  variant="outlined"  className={classes.root}>
      
        <InputLabel htmlFor="outlined-adornment-password">{props.name}</InputLabel>
        <OutlinedInput
   
          value={email}
          onChange={(event)=> {setEmail(event.target.value)}}
          className={useStyles.root}
          id="outlined-adornment-password"
          type='email'
        >
        </OutlinedInput>
      </FormControl>
  )
}

  
// eslint-disable-next-line import/no-anonymous-default-export
export const EntradaPassword = (props) => {

const classes = useStyles();

const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };


    return (
      <FormControl variant="outlined" className={classes.root}>
        <InputLabel htmlFor="outlined-adornment-password">{props.name}</InputLabel>
        <OutlinedInput
          value={values}
          onChange={(event)=> {setValues(event.target.value)} }
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton 
                arial-label="password visibility"
                onClick={handleClickShowPassword}
                edge="end"
               >{values.showPassword ? <Visibility/> : <VisibilityOff/>}</IconButton>
            </InputAdornment>
          }
        >
        </OutlinedInput>
      </FormControl>
    )
}

