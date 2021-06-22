import React from 'react'
import styled from 'styled-components'
import { Box, Retangulo, Form, Button } from '../UI'
import Logo from '../../Assets/img/Logo.svg'
import Titulo from '../Titulo/Titulo'
import Subtitulo from '../Subtitulo'
import Input from '../UI/Nova/Input'

export const Container = styled.div`
    position:relative;
    width:1440px;
    height: 1024px;
    background: #F2F2F2;

`

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

export default  () => {
    return(
        <Container>
            <Box>
                <Img src={Logo}/>
                <Retangulo>
                    <Titulo>Entrar</Titulo>
                </Retangulo>
                <Form>
                    <Input name="Email"/>    
                    <Input name="Password"/>
                </Form>
                <Subtitulo>Não possui conta ainda?<Registro>Registre-se aqui</Registro></Subtitulo>
                <Button>ENTRAR</Button>
            </Box>
        </Container>

    )
}