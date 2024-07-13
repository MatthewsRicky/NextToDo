export default function Sidebar() {
  return (
    <div>
      <section className="flex col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[8%]">
        <form>
          <h1>Add a new To do</h1>
          <input type="text" placeholder="Add a new task..." />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
}
