import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-11/12 relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="w-full rounded-[50px] px-8 py-5 border-none shadow-md shadow-black focus:shadow-[0 0 10px 1000px rgba(0,0,0,0.5)] focus:outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="absolute w-[50px] h-[50px] m-3 rounded-full right-0 border-none text-[15px] bg-[#2f74c0] text-white hover:scale-110 duration-200"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
