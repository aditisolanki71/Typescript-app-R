import React, {useRef} from "react";
import './NewTodo.css';
interface NewTodoProps {
   onAddTodo: (todoText:string)  => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
   const textInputRef = useRef<HTMLInputElement>(null);
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const enteredText = textInputRef.current!.value;
      console.log("entered",enteredText);
      props.onAddTodo(enteredText);
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}></input>
            </div>
            <button type="submit">Add Todo</button>
         </form>
      </div>
   )
}
export default NewTodo;