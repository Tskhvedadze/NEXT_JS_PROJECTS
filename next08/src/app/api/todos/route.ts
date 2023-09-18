import { NextResponse } from "next/server";
import todos from "../../../../../next08/todo.json";

const DATA_SRC_URL = "https://jsonplaceholder.typicode.com/todos";

const API_KEY: string = process.env.DATA_API_KEY as string;

//* **************************** GET REQUEST ****************************
export async function GET() {
  const res = await fetch(DATA_SRC_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

//! **************************** DELETE REQUEST ****************************
export async function DELETE(req: Request) {
  const { id }: Partial<Todo> = await req.json();

  if (!id) return NextResponse.json({ message: "Todo id required" });

  await fetch(`${DATA_SRC_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted` });
}

//todo **************************** POST REQUEST ****************************
export async function POST(req: Request) {
  const { userId, title }: Partial<Todo> = await req.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SRC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}

//? **************************** PUT REQUEST ****************************
export async function PUT(req: Request) {
  const { userId, title, id, completed }: Partial<Todo> = await req.json();

  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SRC_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updateTodo: Todo = await res.json();

  return NextResponse.json(updateTodo);
}
