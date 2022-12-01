import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaCliente(){
    const[empresa , setEmpresa] =useState({
        nombre: '',
        t_negocio: '',
        direc: '',
        id_cdad: '',
        rgo_inf: '',
        rgo_sup: '',
        prt_acep: ''
    })

    const handleChange = (e) => {
        setEmpresa({
            ...empresa,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , t_negocio, direc,
            id_cdad, rgo_inf,
            rgo_sup,prt_acep} = empresa
        if((nombre === '')||(t_negocio === '')||
        (direc === '')||(id_cdad === '')||
        (rgo_inf === '')||(rgo_sup === '')||(prt_acep === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' name='nombre' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de negocio</Form.Label>
                            <Form.Select type='text' name='t_negocio' onChange={handleChange}>
                                <option>Tipo 1</option>
                                <option>Tipo 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Direccion</Form.Label>
                            <Form.Group className=' w-100' as='textarea' rows={3} name='direc' onChange={handleChange}>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ciudad</Form.Label>
                            <Form.Select type='text' name='id_cdad' onChange={handleChange}>
                                <option>Ciudad 1</option>
                                <option>Ciudad 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rango minimo de evaluacion</Form.Label>
                            <Form.Control type='text' name='rgo_inf' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rango maximo de evaluacion</Form.Label>
                            <Form.Control type='text' name='rgo_sup' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Porcentaje de aceptacion</Form.Label>
                            <Form.Control type='text' name='prt_acep' onChange={handleChange}/>
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}