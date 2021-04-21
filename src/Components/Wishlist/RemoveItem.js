import React, { useState } from 'react'
import axios from 'axios'

import { Container, Button, ButtonToolbar } from 'rsuite';
import Main from '../Template/Main';


const headerProps = {
    icon: '',
    title: 'Remove Item',
    subtitle: 'Digite o Id pra excluir o item da lista '
}


export default function RemoveItem() {
    const [id, setId] = useState({ id: ''})




    const removeItem = (e) => {
        e.preventDefault()
        axios.delete(`http://192.168.0.2/api/v1/itens/remove/${id}`)
        .then(response => {
           window.alert(response.data.message)
        }, (error) => {
            console.log(error.response)
            window.alert(error.response.data.message)
        })
    }


    const renderForm = () => {
        return(
            <form >
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                             <label >ID</label> 
                              <input type="text" 
                                onChange={(e) => {handlingItem(e) }}
                                class="form-control"
                                placeholder="Digite o Id do item "
                                required/>
                    
                                 <hr />
                                 <div class="btn-group" role="group" aria-label="Basic example">
                                     <ButtonToolbar>
                                        <Button  appearance="primary"  onClick={(e) => { removeItem(e) }}>Remover Item</Button>
                                     </ButtonToolbar>
                                </div>
                        </div>
                  </div>
             </form>
        )
    }

    const handlingItem = (e) => {
         setId(e.target.value)
    }

    return(
        <Container>
            <Main {...headerProps}>
             { renderForm() }
            </Main>
        </Container>
    )
}