import { Button, Modal } from "react-bootstrap";


export default function ModalEdit(handleModal: any, input: boolean) {


    
    console.log(input)

    return (
       <Modal show={false} onHide={handleModal} >
           <Modal.Header closeButton>
                Modal header
           </Modal.Header>
           <Modal.Body>
               modal body
           </Modal.Body>
           <Modal.Footer>
               <Button onClick={handleModal}>Guardar</Button>
               <Button>Cancelar</Button>
           </Modal.Footer>
       </Modal>
    )
}