import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

// Types
// let anything: any;
// let anything: unknown;
// let name: String = "Hamza";
// let age: Number = 22;
// let isStudent: Boolean;
// let hoobies: String[];
// let role: [number, String];
// type Person = {
//   name: String;
//   age?: Number;
// };
// let person: Person = {
//   name: "Hamza",
//   age: 22,
// };
// let lotsOfPerson: Person[];
// Union Types
// let age: String | number;
// age = "hamza";
// age = 22;

// Function Type
// let printName: (name: string) => void;
// let printName: (name: string) => number;
// let printName: (name: string) => Person;
// let printName: (name: string) => never;

// Interface
// interface Person {
//   name: String;
//   age?: Number;
// }
// interface Guy extends Person {
//   profession: String;
// }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#2f74c0]">
      <h1 className="uppercase text-4x md:text-3xl z-[1] text-center text-white my-8 md:my-4 mx-0">
        Taskify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
