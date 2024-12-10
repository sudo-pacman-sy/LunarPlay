import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleDrawer(false)();
  };

  const drawerContent = (
    <Box
      className="p-4"
      sx={{ backgroundColor: "#f0f0f0", width: "250px", height: "100%" }}
    >
      <p className="text-lg font-bold">Menu</p>
      <ul className="mt-2">
        <li
          className="py-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Home
        </li>
        <li
          className="py-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          About
        </li>
        <li
          className="py-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Contact
        </li>
        <li
          className="py-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Login
        </li>
      </ul>
    </Box>
  );

  return (
    <div id="Navbar" className="bg-[#ff004c] h-14 p-4">
      <nav>
        <span
          className="text-2xl absolute font-bold flex top-3 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          LunarPlay
        </span>

        <ul className="hidden md:flex justify-center content-center gap-16">
          {["Home", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="group transition-all duration-300 ease-in-out"
              onClick={() => handleNavigation("/")}
            >
              <a
                href="#"
                className="bg-left-bottom bg-gradient-to-r from-stone-500 to-stone-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={toggleDrawer(true)}>
          <MenuIcon
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
            }}
          />
        </div>

        {/* <div className="hidden md:flex absolute top-1 right-4 p-2">
          <button className="bg-violet-500 hover:bg-violet-600 px-4 py-[6px] rounded-md">
            Login
          </button>
        </div> */}

        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          transitionDuration={250}
        >
          {drawerContent}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
