import React, { useState } from "react";
import TodoItems from "./TodoItems";
import Input from "./Input";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");

  const editTask = (id) => {
    const editValue = tasks.find((task) => task.id === id);

    setInput(editValue.task);
    setEdit(editValue);
    deleteTask(id);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const taskCompletedFun = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, taskCompleted: !task.taskCompleted };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <h1 className="py-10 text-4xl font-bold">Todo List</h1>
      <Input
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
        edit={edit}
        setEdit={setEdit}
      ></Input>

      <ul>
        {tasks.map((task) => (
          <TodoItems
            value={task.task}
            key={task.id}
            id={task.id}
            taskCompleted={task.taskCompleted}
            deleteTask={() => deleteTask(task.id)}
            taskCompletedFun={() => taskCompletedFun(task.id)}
            editTask={() => editTask(task.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
