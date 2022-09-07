
import './App.css';
import TodoList from './conponents/TodoList';
import  TodoAdd from './conponents/TodoAdd'
import Footer from './conponents/Footer';
function App() {
  const list = [
    { id: '1', text: 'Clean up to bedroom'},
    { id: '2', text: 'Buy some milk'},
    { id: '3', text: 'Jogging'},
    { id: '4', text: 'Learn React'},
    { id: '5', text: 'Doing exercises'}
  ]
  return (
    <div className="App">
      <TodoAdd />
      <TodoList text= {list} />
      <Footer />
    </div>
  );
}

export default App;
