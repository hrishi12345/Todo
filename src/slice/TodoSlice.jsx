import { createSlice } from "@reduxjs/toolkit";

const initialTodoState=()=>{
    const localTodo=window.localStorage.getItem('todo')
    if(localTodo){
        return JSON.parse(localTodo);
    }
    window.localStorage.setItem('todo',[])
    return []
} 

const initialState={
    getFilter:'all',
    todoList:initialTodoState()

}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push(action.payload)
            const todoList=window.localStorage.getItem('todo')
            if(todoList){
                const todoListArr=JSON.parse(todoList)
                todoListArr.push({...action.payload})
                window.localStorage.setItem('todo',JSON.stringify(todoListArr))
            }else{
                window.localStorage.setItem('todo',JSON.stringify([{
                    ...action.payload
                }]))
            }
            
        }
    }
})

export const {addTodo}=todoSlice.actions
export default todoSlice.reducer