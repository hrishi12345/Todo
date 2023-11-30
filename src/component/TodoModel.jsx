import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add TODO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Title</label><br></br>
        <input/>
        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-menu-dark">
        Select Status
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu dropdown-menu-dark'>
        
        <Dropdown.Item href="#">Incomplete</Dropdown.Item>
        <Dropdown.Item href="#">Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Add Task</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal

