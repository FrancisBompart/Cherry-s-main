import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormCuotas(){
    const[cuota , setCuota] =useState({
        id_prod_cont: '',
        id_client_cont: '',
        monto: ''
    })

    const handleChange = (e) => {
        setCuota({
            ...cuota,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        const {id_prod_cont, id_client_cont, monto} = cuota
        if((id_prod_cont === '')||(id_client_cont === '')||
        (monto === '')){
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
                        <Form.Select type='text' name='id_prod_cont' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa Cliente</Form.Label>
                        <Form.Select type='text' name='id_client_cont' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type='text' name='monto' onChange={handleChange} />
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}