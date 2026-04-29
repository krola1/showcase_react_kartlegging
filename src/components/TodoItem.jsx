export default function TodoItem({ id, createdAt, title, done }) {
  const date = new Date(createdAt).toLocaleString();
  return (
    <div style={{ border: "solid white" }}>
      <p>{date}</p>
      <p>{id}</p>
      <h3>{title}</h3>
      <input id="checkbox" type="checkbox" checked={done} />
      <label htmlFor="checkbox">Completed</label>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
