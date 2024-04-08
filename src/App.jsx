import './App.css'

import { useEffect, useState } from 'react'

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from './components/Navbar'
import {v4 as uuidv4} from 'uuid';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished ] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])
  
  const saveToLs = ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  };

  const toggleFinished = (e)=>{
    setshowFinished(!showFinished);
  };

  const handleEdit=(e,id)=>{
    let temp=todos.filter(item=>{
      return item.id === id;
    });
    setTodo(temp[0].todo);
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos);
    saveToLs();
  };

  const handleDelete=(e,id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id;
    });
    setTodos(newTodos);
    saveToLs();
  };

  const handleCheckbox=(e)=>{
    let id = e.target.name;
    let index= todos.findIndex(item => {
      return item.id === id;
    });
    let newTodos =[...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLs();
  };

  const handleChange=(e)=>{
    setTodo(e.target.value);
  };

  const handleAdd=()=>{
    setTodos([...todos,{id: uuidv4(), todo, isCompleted:false}]);
    setTodo("");
    saveToLs();
  };

  return (
    <>
    <Navbar />
      <div className="md:container md:mx-auto mx-3 my-3 md:my-5 rounded-xl p-5 px-10 bg-blue-200 min-h-[80vh] md:w-2/3">
        <h1 className='font-bold text-center text-2xl'>TaskComp - Complete and Compete with your task</h1>
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold ">Add a Task</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-4/5 rounded-md py-1'/>
          <button onClick={handleAdd} className='bg-blue-500 hover:bg-blue-600 p-3 py-1 text-blue-50 rounded-lg m-4 font-bold'>Save</button>
        </div>
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} className='mt-4' /> Show Completed Task
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-3"></div>
        <h1 className="text-xl font-bold">Your TASKS</h1>
        <div className="todos">
          {todos.length === 0 && <div className='m-5 text-lg font-medium'>There are No Tasks</div>}
          {todos.map(item=>{
            return(
           (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-2/3 my-3 justify-between items-center">
              <div className='flex gap-5'>
              <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
            <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
            <div className="buttons flex">
              <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-blue-500 hover:bg-blue-600 p-3 py-1 text-blue-50 rounded-lg m-2 font-bold'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-blue-500 hover:bg-blue-600 p-3 py-1 text-blue-50 rounded-lg m-2 font-bold'><MdDelete /></button>
            </div>

          </div>
          )})}
        </div>
      </div>
    </>
  )
}

export default App
