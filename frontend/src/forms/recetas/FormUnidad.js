import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormUnidad(){
    const[unidad , setUnidad] =useState({
        nombre: '',
        tipo: '',
        abrev: '',
        descrip: ''
    })

    const handleChange = (e) => {
        setUnidad({
            ...unidad,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        const {nombre, tipo, abrev, descrip} = unidad
        if((nombre === '')||(tipo === '')||
        (abrev === '')||(descrip === '')){
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
                        <Form.Control type='text'name='nombre' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select type='text' name='tipo' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Volumen</option>
                            <option>Masa</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Abreviacion</Form.Label>
                        <Form.Control type='text'name='abrev' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId='formDescripcion'>
                        <Form.Label>Descripcion</Form.Label>
                            <Form.Group className=' w-100' as='textarea' rows={3} name='descrip' onChange={handleChange}>
                            </Form.Group>
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}