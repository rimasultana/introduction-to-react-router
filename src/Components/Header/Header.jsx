import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <ul className="flex justify-center text-3xl my-14 gap-20">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "green" } : {}
              }
              className="bg-red-500 px-4 py-2"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "green" } : {}
              }
              className="bg-red-500 px-4 py-2"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contract"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "green" } : {}
              }
              className="bg-red-500 px-4 py-2"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "green" } : {}
              }
              className="bg-red-500 px-4 py-2"
            >
              Service
            </NavLink> 

            <NavLink
              to="/Users"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "green" } : {}
              }
              className="bg-red-500 px-4 py-2"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
