export default function Sidebar() {
  return (
    <div>
      <section className="flex col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[8%]">
        <form>
          <h1>Add a new To do</h1>
          <input
            type="text"
            className="px-2 py-3 border-solid border-black/70"
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
}
