"use client";
import { useState } from "react";

import { getData } from "@/app/mech/actions";
import { AddData } from "@/app/mech/actions";
export default function ClientComp() {
  const [name, setName] = useState("John Doe");

  async function handleSubmit(event) {
    event.preventDefault();
    await AddData(event.target[0].value);
    const result = await getData();
    setName(result[0].name)
  }

  return (
    <div className="bg-black h-screen text-white">
      <h1>{name}</h1>
      <button onClick={() => setName("Jane Doe")}>Change Name</button>
      <form onSubmit={handleSubmit}>
        <input type="text" className="bg-black text-white"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}