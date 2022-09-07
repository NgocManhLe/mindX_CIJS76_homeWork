import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todo__item'>
      <li>
        <p>{props.text}</p>
        <button className='btn'>remove</button>
      </li>
    </div>
  )
}

export default TodoItem