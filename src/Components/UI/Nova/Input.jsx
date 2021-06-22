import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel, IconButton,InputAdornment} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';


const handleSubmit = () => {

}
  
export default (props) => {

const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
    

    return (
      <FormControl variant="outlined">
        <InputLabel>{props.name}</InputLabel>
        <OutlinedInput
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
               ></IconButton>
            </InputAdornment>
          }
        >

        </OutlinedInput>
      </FormControl>
    )
}

