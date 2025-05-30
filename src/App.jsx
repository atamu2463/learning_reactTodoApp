import { useState, useRef } from "react";
import TodoList from "./components/TodoList.jsx";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [todos, setTodos] = useState([]);
  
  const todoNameRef = useRef();

  const handleAddTodo = () => {
   //タスクを追加
   const name = todoNameRef.current.value;
   if (name === "") return;
     setTodos((prevTodos) => {
     return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    });
    todoNameRef.current.value = null;
  };

  //チェックボックスの状態を変える関数
  const toggleTodo = (id) => {
    //状態変数をコピー
    const newTodos = [...todos];
    //引数と同じidのオブジェクトだけtodoに格納
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos = {todos} toggleTodo = {toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear} >完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </>
  )
}

export default App
