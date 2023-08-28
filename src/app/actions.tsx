"use server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient

export type FormValues = {
    _id:number;
    _email:string;
    _name:string;
};

export async function addItem({
_id
}: FormValues) {
 

  const names = await prisma.user.findFirst({
    select: {
      name: true,
    },
    where: {
      id:_id,
    },
  });
  

  return { names };
}