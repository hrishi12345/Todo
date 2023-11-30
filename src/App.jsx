import { useState } from 'react'
import AppName from './component/AppName'
import AddTodo from './component/AddTodo'
import TodoItem from './component/TodoItem'



function App() {
 
  return <div className='container'>
         <AppName />
         <div style={{ maxWidth: '750px', width: '100%', margin: '0 auto' }}>

         </div>
         <AddTodo />
         <TodoItem />
  </div>
}

export default App
