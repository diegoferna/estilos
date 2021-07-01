import React from 'react'
import DadosPessoais from './DadosPessoais'
import DadosEntrada from './DadosEntrada'
import DadosLogado from './DadosLogado'
import { useState } from 'react'


function FormularioCadastro({aoEnviar}){
    const [tela, setTelaAtual] = useState(0);



    const formularios = [
        <DadosEntrada aoEnviar={proxima} />,
        <DadosPessoais  aoEnviar={proxima}/>,
        <DadosLogado  />
    ]

   
    function proxima() {
        setTelaAtual(tela+1)
    }

    return(
        <>
            {formularios[tela]}
        </>
    )

}



export default FormularioCadastro