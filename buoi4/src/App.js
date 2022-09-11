
import './App.css';
import TodoList from './conponents/TodoList';
import  TodoAdd from './conponents/TodoAdd'
import Footer from './conponents/Footer';
import {useState} from 'react'
function App() {
  // const list = [
  //   { id: '1', text: 'Clean up to bedroom'},
  //   { id: '2', text: 'Buy some milk'},
  //   { id: '3', text: 'Jogging'},
  //   { id: '4', text: 'Learn React'},
  //   { id: '5', text: 'Doing exercises'}
  // ]
  const [list, setList] = useState([
    { id: '1', text: 'Clean up to bedroom'},
    { id: '2', text: 'Buy some milk'},
    { id: '3', text: 'Jogging'},
    { id: '4', text: 'Learn React'},
    { id: '5', text: 'Doing exercises'}
  ])

  const removeTask = () => {
    const a = list.filter((item) => item.text != 'Jogging')
    setList(a)
  }
  return (
    <div className="App">
      <TodoAdd />
      <TodoList text= {list} />
      <Footer />
      <button onClick={removeTask}>xóa</button>
    </div>
  );
}

export default App;
