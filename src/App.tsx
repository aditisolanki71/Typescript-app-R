import React,{useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './Model/todo.model'
//type provide by react
//FunctionComponent = FC
const App: React.FC = () => {
const [todos,setTodos] = useState<Todo[]>(
  [ 
    {id:'1', text: 'Typescript'},
    {id:'2', text: 'GraphQL'},
    {id:'3', text: 'React'}
  ]);
 const submitTodo = (newText:string) => {
   const newTodo = {id: Math.random().toString(),text:newText};
  //  setTodos([...todos,newTodo]);
  setTodos(prevTodos => [...prevTodos,newTodo]);
 }
 const deleteTodo = (id:string) => {
 //  setTodos([...todos,newTodo]);
 setTodos(prevTodos => {
   return prevTodos.filter(todo => todo.id !== id);
 });
}
  return (
    <div className="App">
      Typescript React
      <NewTodo onAddTodo={submitTodo} />
      <TodoList items={todos} onDeleteTodo={deleteTodo}/>
    </div>
  );
};

export default App;
