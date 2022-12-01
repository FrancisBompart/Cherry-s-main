import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormCultivo(){
    const[cultivo , setCultivo] =useState({
        calibre: '',
        disp_i: '',
        disp_f: '',
        prod_esp: '',
        max_dist_exp: '',
        id_prod: '',
        id_crz: ''
    })

    const handleChange = (e) => {
        setCultivo({
            ...cultivo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {calibre, disp_i,
            disp_f, prod_esp, max_dist_exp,
            id_prod, id_crz} = cultivo
        if((calibre === '')||
        (disp_i === '')||(disp_f === '')||
        (prod_esp === '')||(max_dist_exp === '')||
        (id_prod === '')||(id_crz === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Calibre</Form.Label>
                        <Form.Select type='text' name='calibre' onChange={handleChange}>
                            <option>Small</option>
                            <option>Large</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Disponibilidad inicial</Form.Label>
                            <Form.Control type='date' name='disp_i' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Disponibilidad final</Form.Label>
                            <Form.Control type='date' name='disp_f' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produccion esperada</Form.Label>
                            <Form.Control type='text' name='prod_esp' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Maximo en kg</Form.Label>
                            <Form.Control type='text' name='max_dist_exp' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa</Form.Label>
                            <Form.Select type='text' name='id_prod' onChange={handleChange}>
                                <option>Prod 1</option>
                                <option>Prod 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Variedad</Form.Label>
                            <Form.Select type='text' name='id_crz' onChange={handleChange}>
                                <option>Variedad 1</option>
                                <option>Variedad 2</option>
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