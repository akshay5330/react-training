import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todotext = useRef<HTMLInputElement>(null);

  function Submithandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredName = todotext.current!.value;

    if (enteredName.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredName);
  }

  return (
    <form onSubmit={Submithandler} className={classes.form}>
      <label htmlFor="text">Todo</label>
      <input type="text" id="text" ref={todotext} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
