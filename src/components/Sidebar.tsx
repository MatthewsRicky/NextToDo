export default function Sidebar() {
  return (
    <div>
      <section className="flex col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[8%]">
        <form className="flex flex-col gap-y-2 px-4">
          <h1>Add a new To do</h1>
          <input
            type="text"
            className="px-2 py-3 border border-black/30 rounded-md shadow-sm shadow-black/40 gap-x-2"
          />
          <button type="submit"></button>
        </form>
      </section>
    </div>
  );
}
