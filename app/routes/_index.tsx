import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function loader() {
  const tasks = await prisma.task.findMany();
  return json({ tasks });
}
