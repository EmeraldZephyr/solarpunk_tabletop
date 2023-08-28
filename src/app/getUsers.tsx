"use client";
import { FormValues, addItem } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Get_Users({ _id }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [result,setResult] = useState('');
  async function onSubmit(data: FormValues) {
    setLoading(true);
    let resp;
    let datum={_id:1,_email:'something',_name:'jared'}
    try {
      resp = await addItem(datum);
      setResult(JSON.stringify(resp))
      return resp
    } catch (error) {
      console.log(error)
      };
     return resp
      }

  return (
    <>
      <button onClick={onSubmit}>click here, dummy</button>
      <div>{result}</div>
    </>
  );
}