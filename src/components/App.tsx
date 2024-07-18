import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";
function App() {
  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#F1D4B3] min-h-screen">
      <BackgroundHeading />

      <main className="relative w-[972px] rounded-[8px] bg-white h-[636px] shadow-[0_4px_4px_rgba(0,0,0,0.8)] grid grid-cols-[7fr_4fr] grid-rows-[50px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
