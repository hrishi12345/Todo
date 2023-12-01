import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/TodoSlice';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
function MyVerticallyCenteredModal(props) {
    const [title,setTitle]=useState('')
    const [status,setStatus]=useState('incomplete')
    const dispatch=useDispatch()
    const handleData=(e)=>{
       e.preventDefault()
       dispatch(
        addTodo({
          id:uuid(),
          title,
            status,
            time: format(new Date(), 'p, MM/dd/yyyy'),
        })
       )
       props.onHide()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={(e)=>handleData(e)}>
      <Modal.Header closeButton>
        
        <Modal.Title id="contained-modal-title-vcenter">
          Add TODO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor='title'>Title</label><br></br>
        <input id='title' onChange={(e)=>setTitle(e.target.value)}/>
        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-menu-dark">
        Select Status
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu dropdown-menu-dark' onChange={(e)=>{setStatus(e.target.value)}}>
        
        <Dropdown.Item href="#">Incomplete</Dropdown.Item>
        <Dropdown.Item href="#">Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Modal.Body>
      <Modal.Footer>
      <Button type='submit'>Add Task</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </form>
    </Modal>
  );
}

export default MyVerticallyCenteredModal

