import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormConvenioProveedor(){
    const[convprov , setConvprov] =useState({
        id_prod: '',
        id_prove: ''
    })

    const handleChange = (e) => {
        setConvprov({
            ...convprov,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {id_prod, id_prove} = convprov
        if((id_prod === '')||(id_prove === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Empresa Proveedora</Form.Label>
                            <Form.Select type='text' name='id_prove' onChange={handleChange}>
                                <option>Provee 1</option>
                                <option>Provee 2</option>
                            </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Empresa Productora</Form.Label>
                            <Form.Select type='text' name='id_prod' onChange={handleChange}>
                                
                            </Form.Select>
                    </Form.Group>
                    
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}