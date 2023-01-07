import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { TodoMod } from './components/TodoModel';

const App:React.FC = () => {
  const [todoList, setTodoList] = useState<TodoMod[]>([]);

  const todoHandler = (text:string) => {
    setTodoList(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
  }

  const TodoDeleteHandler = (todoId:string) =>{
    setTodoList(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler} />
      <TodoList items={todoList}  onDeleteTodo={TodoDeleteHandler}/>
    </div>
  );
}
export default App;
