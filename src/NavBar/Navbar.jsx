import { GraduationCap, Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Routs/Authintication/AuthProvider file/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed!");
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <GraduationCap size={20} />
          </div>
          <h1 className="text-xl font-semibold text-blue-500">EduConnect</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm">
          <NavLink className="text-blue-500 hover:text-blue-700" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-700" to={"/collages"}>
            Colleges
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-700" to={"/admission"}>
            Admission
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-700" to={"/myCollage"}>
            My College
          </NavLink>
          <NavLink className="text-gray-700 hover:text-blue-700" to={"/addCollage"}>
            Add College
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          {user?.email ? (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 focus:outline-none"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border border-gray-300"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                    {user.displayName?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-sm text-gray-700 font-medium hidden sm:block">
                  {user.displayName || "My Profile"}
                </span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl border p-4 z-50">
                  <div className="flex items-center space-x-3 border-b pb-3 mb-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="User"
                        className="w-10 h-10 rounded-full border"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                        {user.displayName?.charAt(0) || "U"}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user.displayName || "Unnamed User"}
                      </p>
                      <p className="text-gray-500 text-xs">{user.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <NavLink
                      to="/profile"
                      className="block w-full text-left text-sm text-gray-700 hover:text-blue-500 transition"
                      onClick={() => setShowProfile(false)}
                    >
                      View Profile
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left text-sm text-red-500 hover:text-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink to={"/login"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-5 py-1.5 rounded-full">
                Sign In
              </button>
            </NavLink>
          )}

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4 text-sm">
          <NavLink
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collages"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Colleges
          </NavLink>
          <NavLink
            to="/admission"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Admission
          </NavLink>
          <NavLink
            to="/myCollage"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            My College
          </NavLink>
          <NavLink
            to="/addCollage"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Add College
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
