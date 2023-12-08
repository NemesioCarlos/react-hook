"use client";
import { useState, useEffect } from "react";
import Timer from "./Timer";

interface DemoProps {}

export default function Home({}: DemoProps) {
  const [count, setCount] = useState(0);

  return (
    <main className="border  border-black  w-1/2  gap-2  justify-center">
      <div className="flex justify-center">
      <div className="grid colun-1">
        <h1 className="flex self-center">Cliques : {count}</h1>
        <div className="button flex gap-x-2" >
          <button onClick={() => setCount(count + 1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            +
          </button>
          <button onClick={() => setCount(count - 1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            -
          </button>
        </div>
      </div>
      <Timer />
      <div><h2>Joguinho de contagem de clique</h2></div>
      </div>
    </main>
  );
}
