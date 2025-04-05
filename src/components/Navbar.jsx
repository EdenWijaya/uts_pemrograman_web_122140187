import React from "react";
import { Link } from "react-router-dom";
import { User, Phone } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Product", path: "/product" },
    { id: 3, title: "Cart", path: "/cart" },
  ];

  return (
    <nav className="w-full fixed top-0 z-10 bg-white shadow-md">
      <div className="max-w-[100rem] mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <span className="text-sky-800">Denz</span>Shop
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.path} className="hover:text-sky-800 font-medium">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* User & Theme Icons */}
        <div className="flex gap-4 items-center">
          <Link className="hover:text-sky-800">
            <Phone size={23} />
          </Link>

          <Link className="hover:text-sky-800">
            <User size={24} />
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
