import React from 'react'
import Tree from '../media/tree.png'

export default props => (
    <div className='home'>
            <p className="frase"><strong>Falar</strong> é uma necessidade <strong>escutar</strong> é uma <strong>arte</strong></p>
            <div>
                
                <p>A Terapia é um meio de descobrir a fonte de muito de nossos problemas e desconfortos. Um meio de alncaçar autoconhecimento e buscar formar de evolução pessoal.</p>
                <p>Sentimentos reprimidos podem ser prejudiciais a saúde, mental e física.</p>
            </div>
            <div className="positiva">
                <p>A <strong>Psicologia Positiva</strong> busca tirar o melhor das pessoas,
                 permitindo-as uma nova visão de si mesma, levando-as a uma maior satisfação pessoal</p>
                 <img src={Tree} alt=""/>
            </div>
    </div>
)