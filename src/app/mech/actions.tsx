"use server";
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient
export async function AddData(addon:string){
const addedData = await prisma.user.create({
data: {
name: `${addon}`,
email:`${addon}`
},
});
}

export async function getData(){
const names = await prisma.user.findMany({
select: {
name: true,
}
})
return names
}