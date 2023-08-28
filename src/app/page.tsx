import {PrismaClient} from '@prisma/client'
import Get_Users from './getUsers'
const prisma = new PrismaClient
export default async function Page() {
  return(
  <Get_Users _id={1}></Get_Users>
  )
}