import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { createUser, updateUserProfile, reload, setReload } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photourl.value;
    const password = e.target.password.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (password.length < 6) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password must be at least 6 characters long",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!uppercaseRegex.test(password)) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password must contain at least one uppercase letter",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!lowercaseRegex.test(password)) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password must contain at least one lowercase letter",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      createUser(email, password)
        .then(() => {
          updateUserProfile(name, photoUrl).then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            setReload(!reload);
            navigate(location?.state ? location.state : "/");
          });
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Email is already in use",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <>
      <div className="container mx-auto ">
        <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-base-200">
          <h1 className="text-2xl font-bold text-center gradient-text ">
            Register
          </h1>
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md input border-cyan-500 border"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block ">Email</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md input border-cyan-500 border"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block ">Photo URL</label>
              <input
                required
                type="text"
                name="photourl"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md input border-cyan-500 border"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <div className="flex items-center relative">
                <span
                  className="cursor-pointer absolute right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md input border-cyan-500 border"
                />
              </div>
            </div>
            <button
              className="block w-full p-3 text-center rounded-sm gradient-bg text-white"
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-600">
            Already have an account?
            <Link
              to={"/login"}
              className="underline gradient-text text-lg  font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
