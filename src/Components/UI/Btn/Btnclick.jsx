import React from 'react'
import { Button, makeStyles} from '@material-ui/core'
import styled from 'styled-components'


const useStyles = makeStyles((theme)=>({
    root:{
        width: '200px',
        height: '45px',
        left: '0px',
        right: '0px',
        top: '80px',
        bottom: '0px',
        color: 'white',
        backgroundColor:'#006631',
        borderradius: '4px'
    }
}))


const StyledButton = styled(Button)`
    &:hover{
        background: none;
    }
`

export const Btn = ({name}) => {
    const classes = useStyles();

    return(
        <StyledButton  className={classes.root}
        type="submit"
        cursor="pointer"
        >{name}</StyledButton>
    )
}
