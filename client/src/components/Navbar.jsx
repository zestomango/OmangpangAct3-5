function Navbar({ view, onChangeView }) {
  const tabClass = (name) =>
    `rounded-full px-5 py-2 text-sm font-medium transition ${
      view === name
        ? "bg-[#66c0f4] text-[#101822] font-semibold"
        : "text-[#8f98a0] hover:bg-[#212c3d] hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-20 border-b border-[#2a475e] bg-[#171d25]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Show<span className="text-[#66c0f4]">Case</span>
        </h1>
        <div className="flex gap-1 rounded-full bg-[#101822] p-1 border border-[#2a475e]">
          <button
            className={tabClass("gallery")}
            onClick={() => onChangeView("gallery")}
          >
            Gallery
          </button>
          <button
            className={tabClass("manage")}
            onClick={() => onChangeView("manage")}
          >
            Manage
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
