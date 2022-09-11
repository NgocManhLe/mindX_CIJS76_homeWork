import React from 'react'
import TodoItem from '../conponents/TodoItem'

const TodoList = (props) => {
  const {text} = props
  console.log(props)
  return (
    <div className='todo__list'>
      <ul>
      {
        text.map(item => (
          <TodoItem key = {item.id} text={item.text}/>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList