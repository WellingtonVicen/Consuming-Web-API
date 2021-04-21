// Import React 
import React from 'react'
// Import Main
import Main from '../Template/Main'
//Import rsuite
import { Container, Icon } from 'rsuite'

export default props => 
       <Container>
            <div className="homediv">
             <Main active icon={<Icon icon="home" />} title = "Inicio"
                subtitle="Fronend com integração com a wishlist_api.">
                    <div className="display-4">Bem Vindo!</div>
                    <div className="mb-0">Mostrando a comunicação com a wishlist_api</div>

                </Main> 
         </div>
       </Container>


