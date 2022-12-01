import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormContrato(){
    const[contrato , setContrato] =useState({
        id_prod: '',
        id_client: '',
        transp: '',
        descuento: '',
        id_fr_pg: '',
        id_cult: '',
        ctd: '',
        fe_envio: ''
    })

    const handleChange = (e) => {
        setContrato({
            ...contrato,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        const {id_prod, id_client, transp,
            descuento, id_fr_pg, id_cult,
            ctd, fe_envio} = contrato
        if((id_prod === '')||(id_client === '')||
        (transp === '')||(descuento === '')||
        (id_fr_pg === '')||(id_cult === '')||
        (ctd === '')||(fe_envio === '')){
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
                        <Form.Select name='id_prod' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa Cliente</Form.Label>
                        <Form.Select name='id_client' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo Transporte</Form.Label>
                        <Form.Select name='transp' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Transporte 1</option>
                            <option>Transporte 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Porcentaje de descuento</Form.Label>
                        <Form.Control type='text' name='descuento' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Forma de pago</Form.Label>
                        <Form.Select name='id_fr_pg' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>forma 1</option>
                            <option>forma 2</option>
                        </Form.Select>
                    </Form.Group>
                    <h2>Detalles de contrato</h2>
                    <Form.Group>
                    <Form.Label>Cultivo</Form.Label>
                        <Form.Select type='text' name='id_cult' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Cultivo 1</option>
                            <option>Cultivo 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type='text' name='ctd' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Posible Fecha de envio</Form.Label>
                        <Form.Control type='date' name='fe_envio' onChange={handleChange} />
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
            </div>
        </>
    )
}