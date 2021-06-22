import React from 'react'
import styled from 'styled-components'
import { Box, Retangulo, Form, Button } from '../UI'
import { Container } from '@material-ui/core'
import Logo from '../../Assets/img/Logo.svg'
import Titulo from '../Titulo/Titulo'
import Subtitulo from '../Subtitulo'
import { EntradaEmail, EntradaPassword } from '../UI/Input/Input'
import DadosPessoais from './DadosPessoais'

export const Img = styled.img`
    position: absolute;
    left: 29.72%;
    right: 25.28%;
    top: 13.12%;
    bottom: 78.12%;
`

export const Registro = styled.a`
    color:green;
    margin-left:5px;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default  () => {
    return(
        
        <Container maxWidth="lg">
            <Box>
                <Img src={Logo}/>
                <Retangulo>
                    <Titulo>Novo registro</Titulo>
                </Retangulo>
                <Form>
                    <EntradaEmail name="Email"/>    
                    <EntradaPassword name="Password"/>
                </Form>
                <Subtitulo>Não possui conta ainda?<Registro>Registre-se aqui</Registro></Subtitulo>
                <Button>ENTRAR</Button>
            </Box>
        </Container>

    )
}