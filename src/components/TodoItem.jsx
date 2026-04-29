export default function TodoItem({ id, createdAt, title, done }) {
  return (
    <div style={{ border: "solid white" }}>
      <p>{createdAt}</p>
      <p>{id}</p>
      <h3>{title}</h3>
      <input id="checkbox" type="checkbox" checked={done} />
      <label htmlFor="checkbox">Completed</label>
    </div>
  );
}
