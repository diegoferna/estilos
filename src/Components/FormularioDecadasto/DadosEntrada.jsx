import React from 'react'
import styled from 'styled-components'
import { Box, Retangulo, Form } from '../UI'
import { Container } from '@material-ui/core'
import Logo from '../../Assets/img/Logo.svg'
import Titulo from '../Titulo/Titulo'
import Subtitulo from '../Subtitulo'
import { EntradaEmail, EntradaPassword } from '../UI/Input/Input'
import  {Btn}  from '../UI/Btn/Btnclick'
import DadosLogado from './DadosLogado'

export const Img = styled.img`
    position: absolute;
    left: 29.72%;
    right: 25.28%;
    top: 13.12%;
    bottom: 78.12%;
`



const Registro = styled.a`
    color:green;
    margin-left:5px;
    cursor: pointer;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default  ({aoEnviar}) => {

    const handleRegister = (event) => {
        event.preventDefault();
        aoEnviar();
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        <DadosLogado/>
    }


    return(
        
        <Container maxWidth="lg">
            <Box>
                <Img src={Logo}/>
                <Retangulo>
                    <Titulo>Novo registro</Titulo>
                </Retangulo>
                <Form onSubmit={handleSubmit}>
                    <EntradaEmail name="Email"/>    
                    <EntradaPassword name="Password"/>
                    <Subtitulo>Não possui conta ainda?<Registro onClick={handleRegister}>Registre-se aqui</Registro></Subtitulo>
                    <Btn name="ENTRAR"/>
                </Form>
            </Box>
        </Container>

    )
}