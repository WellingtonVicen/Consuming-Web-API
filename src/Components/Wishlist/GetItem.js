import React, { useState } from 'react';
import axios from 'axios'

import { Container, Button, ButtonToolbar } from 'rsuite';
import Main from '../Template/Main';



const headerProps = {
    icon: 'Edit',
    title: 'Pesquisar Item',
    subtitle: 'Pequise seu item em sua lista'
}

export default function GetItem() {
    const [id, setId] = useState({ id: ''})
    const [item, setItem] = useState({ 
        id: '',
        title: '',
        description: '',
        link: '',
        photoUrl:null,
        wonOrBought:false
    })


    const getId = (e) => {
        e.preventDefault();
        axios.get(`http://192.168.0.2/api/v1/users/get-item/${id}`)
        .then(response => {
            if(response.data.data == null) {
                window.alert("ID não Encontrado")
            } else {
                setItem(response.data.data)
            }
        })
    }

    const renderForm = () => {
        return(
            <form  encType="multipart/form-data">
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
                                        <Button  appearance="primary"  onClick={(e) => { getId(e) }}>Pesquisar Item por ID </Button>
                                        <Button  appearance="primary"  onClick={(e) => { randomItem(e) }} >Random Item</Button>
                                     </ButtonToolbar>
                                </div>
                                
                     
                        </div>
                  </div>
             </form>
        )
    }
    

    const randomItem = (e) => { 
        e.preventDefault();

        axios.get(`http://192.168.0.2/api/v1/itens/random-item`)
        .then(response => {
            setItem(response.data.data[0])
            console.log(item)
        })
    }

    

    const renderCard = () => {
        return(
           <div class="card text-white bg-dark" style={{width: 250}}>
                <div class="card-body">
                   <h5 class="card-title">Title: {item['title']}</h5>
                   <p class="card-text">Id:  {item['id']}</p>
                   <p class="card-text">Description: {item['description']}</p>
                   <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input ml-2" checked={item['wonOrBought']}/>
                         <label class="custom-control-label">WonOrBought</label>
                   </div>
                </div>
                <ul class="list-group list-group-flush">
                     <li class="card text-white bg-dark">Photo: {item['photoUrl']}</li>
                </ul>
                <div class="card-body">
                    <a href={item['link']} class="card-link">{item['link']}</a>
                 </div>
            </div>
        )
    }


    const handlingItem = (e) => {
        setId(e.target.value)
    }

    return (
        <Container>
            <Main {...headerProps} >
             { renderForm() }
             { renderCard() }
            </Main>
        </Container>
    )
}

