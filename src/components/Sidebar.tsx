import AddTodoForm from "./AddTodoForm";

export default function Sidebar() {
  return (
    <section className="flex col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[8%]">
      <AddTodoForm />
    </section>
  );
}
