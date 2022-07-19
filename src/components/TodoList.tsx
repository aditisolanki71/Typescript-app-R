import React, { useState, ChangeEvent } from "react";
import { Todo } from '../Model/todo.model'
import "./TodoList.css";
interface TodoListProps {
   items: { id: string, text: string }[];
   onDeleteTodo : (id:string) => void;
   onEditTodo: (todo: Todo,index: number) => void;
   // selectedTodo: {todo:Todo};
   //setSelectedTodo: (todo:string) => void;
}
const TodoList : React.FC<TodoListProps> = (props) => {
   const [isEdit,setIsEdit] = useState(false);
   const [selectedTodo,setSelectedTodo] = useState<Todo>()
   const handleEdit = (todo: Todo) => {
      setIsEdit(true);
      setSelectedTodo(todo);
  }

  const handleTodo = (e: ChangeEvent<HTMLInputElement>):void => {
      if(selectedTodo) {
         setSelectedTodo({ id:selectedTodo.id, text: e.target.value });
      }
  }

  const handleSave = (index:number) : void=> {
   if(selectedTodo){
      props.onEditTodo(selectedTodo,index);
      setIsEdit(false);
      setSelectedTodo(undefined);
   }
  }
   return (
      <div className="todoListContainer">
         <ul>
            <h3>Goals List:</h3>
            {props.items.map((todo,index) => (
               <li key={todo.id}>
                  {
                     isEdit && selectedTodo?.id === todo.id ? (
                     <input 
                        type="text"
                        id="todo-text" 
                        value={selectedTodo?.text} 
                        onChange={handleTodo}
                        className="todoListInput"
                     />)
                     : <span>{todo.text}</span> 
                  }
                  <div className="todoListAction">
                     <button className="todoListDeleteAction" onClick={props.onDeleteTodo.bind(null,todo.id)}>Delete</button>
                     {
                        isEdit && selectedTodo?.id === todo.id ? (
                           <button onClick={() => handleSave(index)}>Save</button>
                        ) : (
                        <button onClick={handleEdit.bind(null,todo)}>Edit</button>
                     )}
                  </div>
               </li>
            ))}
         </ul>
      </div>
   )};
export default TodoList;