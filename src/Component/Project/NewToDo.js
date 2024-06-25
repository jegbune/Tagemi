import './NewToDoStyles.css'
import React, { useState } from 'react'

function NewToDo() {
  const [todos, setTodos] =useState('')
  const [addArray, setAddArray] = useState([])
  const handleClick = (e, index) => {
   e.preventDefault()
    // alert(todos)
    setAddArray([...addArray, todos])
    setTodos('')
  }


  const review = () => {
    alert(addArray)
  }

  return (
    <div>
      <form>
        <label>Add toDo List</label>
        <div className='todo-container'>
          <input type='text' value={todos} onChange={e => setTodos(e.target.value)} className='toDo' placeholder='Enter your To Do' />
        <button className='btn' onClick={handleClick} >Add</button>
        </div>
      </form>
      <div className='list-container'>
        {addArray.map((todo, ind) => {
          return(
            <div key={ind}className='listl'>
              <div  className='li'>
                {ind+1}. {todo} 
              </div>
            </div>
          )
        })}
        
        <button onClick={review} className='btn'>review all</button>

      </div>
    </div>
  )
}

export default NewToDo
