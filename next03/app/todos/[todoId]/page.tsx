type Props = {
  params: {
    todoId: number;
  };
};

export default async function SingleTodo({ params: { todoId } }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: Todo = await res.json();

  console.log(todo.completed);

  return (
    <>
      <h4>{todo.title}</h4>
      <p>This Todo Task is {!todo.completed ? "Completed" : "Not Completed"}</p>
    </>
  );
}
