import React, { useState, useEffect } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("toDoArray")).length > 0
      ? JSON.parse(localStorage.getItem("toDoArray"))
      : []
  );
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("toDoArray", JSON.stringify(toDoList));
  }, [toDoList]);

  const createNewToDo = event => {
    if (event.key === "Enter") {
      const newToDo = event.target.value;
      if (newToDo !== "") {
        setToDoList(prevToDoList => [...prevToDoList, newToDo]);
        event.target.value = "";
      }
    }
  };

  const deleteAllToDos = () => {
    if (toDoList.length !== 0) setToDoList([]);
  };

  const orderToDos = () => {
    if (toDoList.length < 2) return;
    const sortedList = [...toDoList].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    setToDoList(sortedList);
    setSortOrder(prevOrder => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <article className="todo-container">
        <input
          type="text"
          placeholder="Set a new to-do!"
          className="todo-container__input"
          onKeyUp={createNewToDo}
        />
        <ul className="todo-container__todos">
          {toDoList.map((toDo, index) => (
            <li key={index} className="todo-container__todo-item">
              {toDo}
            </li>
          ))}
        </ul>
        <div className="button-container2">
          <button className="button--order" onClick={orderToDos}>
            ORDER
          </button>
          <button className="button--delete" onClick={deleteAllToDos}>
            DELETE ALL
          </button>
        </div>
      </article>
    </>
  );
};

export default ToDoList;
