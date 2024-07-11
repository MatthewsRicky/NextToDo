function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <h1 className="text-[120px] font-bold text-black/5 absolute left-1/2 -translate-x-1/2 tracking-[0.2rem]">
        To Do App
      </h1>

      <main className="relative w-[972px] rounded-[8px] bg-white h-[636px] shadow-[0_4px_4px_rgba(0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[50px_1fr]">
        <header className="col-[1/3] row-[1/2 bg-[#fbf5ed]"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffcf9]"></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
