import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormIngrediente(){
    const[ingrediente , setIngrediente] =useState({
        nombre: '',
        medicion: '',
        descrip: '',
        medicion_mix: ''
    })

    const handleChange = (e) => {
        setIngrediente({
            ...ingrediente,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        const {nombre, medicion, descrip, medicion_mix} = ingrediente
        if((nombre === '')||(medicion === '')||
        (descrip === '')||(medicion_mix === '')){
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
                        <Form.Select type='text' name='medicion' defaultValue='Vacio' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Solido</option>
                            <option>Liquido</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripcion</Form.Label>
                            <Form.Group className=' w-100' as='textarea' rows={3} name='descrip' onChange={handleChange}>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Medicion</Form.Label>
                        <Form.Select type='text' name='medicion_mix' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Volumen</option>
                            <option>Masa</option>
                            <option>Ambos</option>
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