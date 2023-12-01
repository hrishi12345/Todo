import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import MyVerticallyCenteredModal from './TodoModel';
import { useSelector } from 'react-redux';

function AddTodo() {
  const [modalShow, setModalShow] = useState(false);
  const todo=useSelector(state=>state)
  console.log(todo)
    const todoItems=(data)=>{
        
    }
  return (
    <div className='container d-flex  align-items-center justify-content-between h-60'>
          <button type="button" className="btn btn-primary" onClick={()=>setModalShow(true)}>Add Task</button>
          <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-menu-dark">
        Dropdown button
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu dropdown-menu-dark'>
        <Dropdown.Item href="#">All</Dropdown.Item>
        <Dropdown.Item href="#">Incomplete</Dropdown.Item>
        <Dropdown.Item href="#">Completed</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleData={todoItems}
      />
</div>

  )
}

export default AddTodo