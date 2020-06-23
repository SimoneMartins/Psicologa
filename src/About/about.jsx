import React from 'react'

import Tags from '../components/tags'

export default props => (
    <div className='about'>
        <div className="text">
            <p>Psicologa Clínica</p>
            <p>Experiência com Adultos e Idosos</p>
            <p>Me propósito é ajudar as pessoas a percorrerem seus caminhos de forma mais segura e autonoma.</p>
            <p>Principal área de estudo é voltada a <strong>Psicologia Positiva</strong></p>
        </div>
        <div className='areas'>
                <Tags area='Ansiedade'/>
                <Tags area='Depressão'/>
                <Tags area='Luto'/>
                <Tags area='Mais coisas'/>
        </div>
        <div className="text2">
            <p>Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana. (Carl Jung)</p>
        </div>
    </div>
)