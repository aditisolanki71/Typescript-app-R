import React from 'react';
import TodoList from './components/TodoList';
//type provide by react
//FunctionComponent = FC
const App: React.FC = () => {
  const todos = [
    {id:'1', text: 'Typescript'},
    {id:'2', text: 'GraphQL'},
    {id:'3', text: 'React'},
 ];
  return (
    <div className="App">
      Typescript React
      <TodoList items={todos} />
    </div>
  );
};

export default App;
