import React from 'react'

export default props => (
    <div>
        <nav className='meunavbar'>
            <div className="logo">
                <a href="/"><strong>P<span>sicóloga</span> S<span>imone</span> M<span>artins</span></strong></a>
            </div>
            <div className="meumenu col-s-1">
                <a href="/"><i className='fa fa-home'></i> Home</a>
                <a href="about"><i className='fa fa-address-card'></i> Sobre</a>
                <a href="contact"><i className='fa fa-paper-plane'></i> Contato</a>
            </div>
        </nav>
    </div>
)