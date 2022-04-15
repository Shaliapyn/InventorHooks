import React, { useEffect, useReducer, useRef, useState } from "react";

import "./style.css";

const Examplehooks = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);
  const filterTodo = todo.filter((el) => el.id < 6);

  const inputRef = useRef();

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            title: action.title,
          },
        ];
      default:
        return state;
    }
  };
  const [items, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      title: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <div className="todo-block">
        <h2>TERRIBLE TODO LIST</h2>
        <p className="p-or">or</p>
        <h2>EXAMPLE OF USING 4/7 HOOKS</h2>
        <p className="p-without">without posibility do delete </p>
        <ul>
          {filterTodo.map((el, index) => (
            <li key={index}>{el.title}</li>
          ))}
          {items.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Examplehooks;
