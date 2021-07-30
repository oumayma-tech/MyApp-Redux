import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import { Modal, Button, Form } from "react-bootstrap"
import { Edittask } from '../Redux/action'

function Edit({task}) {
    const [show, setShow] = useState(false);
    const [text,setText]=useState(task.task)
    const dispatch=useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" value={text} placeholder="Edit your task here..." onChange={e=>setText(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{dispatch(Edittask(task.id,text));handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit