export default function Header() {
  return (
    <header className="z-2 w-full absolute top-0 bg-black text-white">
      <nav className="flex justify-between items-center p-4 w-full">
        <div>Harish</div>
        <div>
          <a href="#">Resume</a>
          <a href="#">Github</a>
          <a href="#">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
}
