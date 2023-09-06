"use client";
import {PrismaClient} from '@prisma/client'
import { useEffect } from 'react';

import { AddData } from '@/app/mech/actions';
const prisma = new PrismaClient
type NameValues = {
    name:string|null;
}|null
export default async function Page(){
    const addon = useEffect(()=>{
        AddData("hello")
    },[])
    const names:NameValues[] = await prisma.user.findMany({
        select: {
          name: true,
        },
        where: {
          id:1,
        },
      });
      console.log(JSON.stringify(names))

    return(
        <div className="bg-black h-screen text-white">{names.map((name)=>{return <div key={name.name}>{name.name}</div>})}
        <button onClick={AddData}>click here</button>
        </div>
        
        )
}