import React from 'react'


const validacoes= React.createContext(
    {
        emal: semValidacao,
        senha: semValidacao
    }
)

function semValidacao() {
    return {valido: true, text:""}
}

export default validacoes