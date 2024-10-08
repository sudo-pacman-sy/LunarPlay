function Navbar() {
  return (
    <div id="Navbar" className="p-4 bg-[#ff004c]">
      <nav>
        <h1 className="text-2xl absolute font-bold flex top-3">LunarPlay</h1>
        <ul className="flex justify-center content-center gap-16">
          <li className="group transition-all duration-300 ease-in-out">
            <a
              className="bg-left-bottom bg-gradient-to-r from-stone-500 to-stone-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
            <a
              href="#"
              className="bg-left-bottom bg-gradient-to-r from-stone-500 to-stone-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              About
            </a>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
            <a
              href="#"
              className="bg-left-bottom bg-gradient-to-r from-stone-500 to-stone-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex absolute top-1 right-4 p-2">
          <button className="bg-violet-500 hover:bg-violet-600 px-4 py-[6px] rounded-md">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
