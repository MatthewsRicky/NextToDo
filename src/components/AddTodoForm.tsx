export default function AddTodoForm() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center font-medium bg-[#231d15]/70 hover:bg-[#231d15/50] px-2 py-4 text-white">
        Add To Do
      </h2>
      <form>
        <input
          className="border rounded-sm my-6 px-2 py-4 w-full"
          type="text"
        />
        <button
          className="bg-[#231d15]/60 hover:bg-[#231d15/40] rounded-md px-2 py-2"
          type="submit"
        >
          Add To List
        </button>
      </form>
    </div>
  );
}
