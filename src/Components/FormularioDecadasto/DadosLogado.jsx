import React from 'react'
import styled from 'styled-components'
import { Box, Retangulo, Form, Button } from '../UI'
import { Container } from '@material-ui/core'
import Logo from '../../Assets/img/Logo.svg'
import Titulo from '../Titulo/Titulo'
import Subtitulo from '../Subtitulo'
import  {Btn}  from '../UI/Btn/Btnclick'

export const Img = styled.img`
    position: absolute;
    left: 29.72%;
    right: 25.28%;
    top: 13.12%;
    bottom: 78.12%;
`

export default  () => {
    return(
        
        <Container maxWidth="lg">
            <Box>
                <Img src={Logo}/>
                <Retangulo>
                    <Titulo>Bem Vindo</Titulo>
                </Retangulo>
                
                
            </Box>
        </Container>

    )
}

