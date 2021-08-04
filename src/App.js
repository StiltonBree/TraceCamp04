import './App.css';
import { useState } from 'react'

import Form from './components/Form'
import TodoItem from './components/TodoItem'
import Switch from './components/Switch'

function App() {
  const [todo, setTodo] = useState([
    {
      title: 'make to do list',
      description: 'write the to do app for day 4 of Trace camp',
      id: 1,
      stillTodo: true
    },
    {
      title: 'be amazing',
      description: 'you got this one down free',
      id: 2,
      stillTodo: false
    }
  ])
  
  const [visible,setVisible] = useState(false);

  const[idNext,setIdNext] = useState(3);
 
  const handleDone = (id) =>
  {
   
    setTodo(todo.map((obj)=>{if(id===obj.id){return {...obj,stillTodo:false} }return obj}))

  }

  const handleAdd = (title, description) => {
    /* add code for adding an item to the list with the input title and description */
     
    const obj = {title:title,description:description,id:idNext,stillTodo:true}
    
    setIdNext(idNext+1);
    setTodo(todo.concat(obj));
  }

  const handleDelete = (id) =>
  {
    setTodo(todo.map((obj)=>{if(id === obj.id){return null}return obj})
    .filter(obj=>obj))
  }
  return (
    <div className="App">
      {/* add a switch to toggle visibility on finished items */}
      
        <Switch toggleVisibility = {()=>setVisible(!visible)}/>
        
      
      {/* add dynamic array transformations to components */}
      {
        todo
        .filter(item=>{
          if(!visible){
            return item.stillTodo
          }
          return true
        })
        .map((item)=><TodoItem title = {item.title} description = {item.description} id = {item.id} handleDone = {handleDone} handleDelete = {handleDelete}/>)
      }
      <Form handleSubmit={handleAdd} />
    </div>
  );
}

export default App;


