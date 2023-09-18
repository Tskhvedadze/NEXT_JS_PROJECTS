import Link from "next/link";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  return (
    <div>
      {data.map((todo: Todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <Link
                href={`/todos/${todo.id}`}
                style={{
                  //   textDecoration: `${todo.completed ? "" : ""}`,

                  color: `${todo.completed ? "green" : "red"}`,
                }}
              >
                {todo.title}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
