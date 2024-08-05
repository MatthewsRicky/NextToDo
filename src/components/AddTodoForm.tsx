export default function AddTodoForm() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center font-medium bg-[#231d15]/70 px-2 py-4 text-white">
        Add To Do
      </h2>
      <form>
        <input type="text" />
        <button className="bg-[#231d15]/30 rounded-md px-2 py-2" type="submit">
          Add To List
        </button>
      </form>
    </div>
  );
}
