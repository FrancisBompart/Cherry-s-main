import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaProductora(){
    const[prodanual , setProanual] =useState({
        id_prod: '',
        id_cult: ''
    })

    const handleChange = (e) => {
        setProanual({
            ...prodanual,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {id_prod , id_cult} = prodanual
        if((id_prod === '')||(id_cult === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Empresa Productora</Form.Label>
                        <Form.Select type='text' name='id_prod' onChange={handleChange}>
                            <option>prod 1</option>
                            <option>prod 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cultivos</Form.Label>
                        <Form.Select type='text' name='id_cult' onChange={handleChange}>
                            <option>cult 1</option>
                            <option>cult 2</option>
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