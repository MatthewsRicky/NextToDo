export default function AddTodoForm() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center font-medium bg-[#231d15] px-2 py-4 text-white">
        Add To Do
      </h2>
      <form>
        <input type="text" />
        <button type="submit">Add To List</button>
      </form>
    </div>
  );
}
