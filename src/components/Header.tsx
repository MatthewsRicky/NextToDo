export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-2 col-[1/3] row-[1/2 bg-[#fbf5ed] border-b border-black/[8%] p-4">
        <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />

        <p>
          <b>0</b> / 0 todos completed
        </p>
      </header>
    </div>
  );
}
