import BackgroundHeading from "./BackgroundHeading";
function App() {
  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] rounded-[8px] bg-white h-[636px] shadow-[0_4px_4px_rgba(0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[50px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2 bg-[#fbf5ed] border-b border-black/[8%]"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[8%]"></section>
      </main>
      <footer className="flex justify-between w-[972px] items-center text-[11px] mt-[17px]">
        <small className="text-[11px]">&copy; 2024 copyright by Ricky</small>
        <p>
          version <b>1.5</b>
        </p>
      </footer>
    </div>
  );
}

export default App;
