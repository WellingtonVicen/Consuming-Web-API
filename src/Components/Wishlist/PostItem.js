import React, { useState } from 'react';
import axios from 'axios';

import Main from '../Template/Main'
import { Container } from 'rsuite';

import { Button } from 'rsuite';


const headerProps = {
   icon: 'Users',
   title: 'Adicionar item',
   subtitle: 'Preencha o formulario abaixo para adicionar o item em sua lista'
}

const initialFieldValues = {
        Title: '',
        Description: '',
        Link: '',
        Photos:null,
        WonOrBought: false
}


export default function PostItem() {

    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {

        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        
        
    }

    
    const saveImage = e => {
        
        let Photos = e.target.files[0]
        const reader = new FileReader()
        reader.onload = x => {
            setValues({
                ...values,
                Photos,
            })
        }
        reader.readAsDataURL(Photos)
    }  
    
    const handleCheck = e => {
        
        if(values.WonOrBought === null || values.WonOrBought === false) {
             setValues({
                 ...values,
                 WonOrBought: true
                 
             })
             console.log(values)
        }
        else if(values.WonOrBought !== null) {
            setValues({
                ...values,
                WonOrBought: false
            })
            console.log(values)
        }
        
    }

    const validate = () => {
        let temp = {}
        temp.Title = values.Title === "" ? false : true
        temp.Description = values.Description === "" ? false : true
        temp.Link = values.Link === "" ? false : true

        return Object.values(temp).every(x => x === true)
    }

    const handleFormSubmit = (e) => {
          e.preventDefault()
            if(validate) {

            const formData = new FormData()
            formData.append('Title', values.Title)
            formData.append('Description', values.Description)
            formData.append('Link', values.Link)
            formData.append('Photos', values.Photos)
            formData.append('WonOrBought', values.WonOrBought)

            axios.post("http://192.168.0.2/api/v1/itens/create", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                
            }).then((response) => {
                 window.alert(response.data.message)
            }, (error) => {
                if(error.response.data.message != null) {
                    window.alert(error.response.data.message)
                } else {
                    for(var [key, value] of Object.entries(error.response.data.errors)) {
                        window.alert(key + ': ' + value)
                    }
                }
            })
        }
        
    }


    const renderForm = () => {
        return (
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label >Title</label> 
                    <input type="text" 
                    onChange={handleInputChange}
                    name="Title"
                    class="form-control"
                    placeholder="Title" 
                    value={values.Title} required/>
                 </div>

                <div class="col-md-4 mb-3">
                    <label>Description</label> 
                    <input type="text" 
                    onChange={handleInputChange}
                    name="Description"
                    class="form-control"
                    placeholder="Description" 
                    value={values.Description}/>
                 </div>

                <div class="col-md-4 mb-3">
                    <label>Link</label> 
                    <input type="text" 
                    onChange={handleInputChange}
                    name="Link"
                    class="form-control"
                    placeholder="Digite o link do item" 
                    value={values.Link}/>
                 </div>
            </div>

            <div class="form-row">
                    <div class="col-md-4 mb-3">
                            <label>Photo</label>
                            <input type="file" 
                                onChange={saveImage}
                                class="form-control"
                                placeholder="Adicone uma foto de referencia" 
                                 accept="image/*"/>
                    </div>

                  
                      <div class="form-check col mt-5 ml-4">
                        <input class="form-check-input"
                          type="checkbox"
                          onChange={handleCheck} 
                          name="WonOrBought"
                          value={values.WonOrBought}
                          id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            WonOrBought
                          </label>
                      </div>
            </div>
            <hr />
            <div class="form-row">      
            <Button appearance="primary" type="submit">Submit Item</Button>
            </div>  
        </form> 

        )
    }

    return(
        <Container>
            <Main {...headerProps}>
             { renderForm() }
            </Main>
        </Container>
    )
}

