import axios from 'axios';
import { ConfiguracionModal} from "../types"
import { Button, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import React, {  useState } from 'react';
interface Props {
    configs: Array<{
        id: string
        key: string
        value: string
    }>
}

interface ConfiguracionState {
    inputValues: ConfiguracionModal
}

export default function ListConfiguration({ configs }: Props) {

    const [inputModal, setModal] = useState<any>({
        showModal: false
    })

    const [inputValues, setInputValues] = useState<ConfiguracionState["inputValues"]>({
        id: '',
        key: '',
        value: ''
    })

    const handleModal = () => {
        
        setModal({
            inputModal,
            showModal: !inputModal.showModal
        })
    }

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) =>{
        
        console.log( e.currentTarget.value);
        setInputValues({
            ...inputValues,
            id: e.currentTarget.value
        })
        handleModal()
    }

    const handleSumitModal = () => {


        const response=  axios.put('https:///api/Config/',inputValues)
        .then(response => response.data)  
        return response 
    }

    const handleDeleteConfig = (e: React.MouseEvent<HTMLButtonElement>) => {
        
         const response=  axios.delete('https://localhost:44317/api/Config/'+e.currentTarget.value)
        .then(response => response.data)  
        return response  
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })

    }

    return (
        <div className="table-scroll">
            <Modal show={inputModal.showModal} onHide={handleModal} >
                <Modal.Header closeButton>
                    Modal header
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        

                        <Form.Group className="mb-3"  controlId="keyControl">
                            <Form.Label>Nombre de configuración</Form.Label>
                            <Form.Control name="key" onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3"  controlId="valueControl">
                            <Form.Label>Valor de configuración</Form.Label>
                            <Form.Control name="value" onChange={handleChange} type="text" placeholder="Ingrese el valor" />
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleSumitModal}>Guardar</Button>
                    <Button onClick={handleModal}>Cancelar</Button>
                </Modal.Footer>
            </Modal>

            <table className="table table-primary">

                <thead>
                    <tr>
                        
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        configs.map(config => {
                            return (
                                <tr key={config.id}>
                                    <th >{config.key}</th>
                                    <th >{config.value}</th>
                                    <th >
                                        <Button value={config.id} onClick={handleEdit}>Editar</Button>
                                        <Button value={config.id} variant="danger" onClick={handleDeleteConfig}>Eliminar</Button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </table>
        </div>

    )

}