import React from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';


function TodoItem() {
  const itemState=useSelector(state=>state.todo.todoList)
  console.log(itemState)
  return (
    <div className='container text-center'>

    
    <div className='h-50px row p-3 mt-3 bg-secondary-subtle rounded '>
      {itemState && itemState.length>0 ? itemState.map((todo)=><div className='h-30px bg-white rounded d-flex justify-content-between m-3'>
       <input type='checkbox' />
       <div className='d-flex flex-column'>
        <span>{todo.title}</span>
        <span>{todo.time}</span>
       </div>
        <div>
        <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
           <IconButton>
         <EditIcon />
         </IconButton>
        </div>
      </div>):(
      
      <div className='d-inline-flex justify-content-center mt-2'>
      <p className='text-center bg-dark-subtle'>No Todos</p>
      </div>)} 
      </div>
      </div>
  )
}

export default TodoItem