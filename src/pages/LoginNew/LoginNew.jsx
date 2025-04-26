import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../../assets/loginImage.jpg";

const LoginNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store token and userId in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        // ✅ Navigate to home
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login");
    }
  };

  return (
    <div className="bg-[#002140] min-h-screen flex justify-center items-center p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="hidden md:block w-1/2 bg-center bg-cover">
          <img src={Login} className="bg-cover" alt="Login" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 bg-white">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-medium text-[#002140] mb-1">Taste'n Talk</h1>
            <h2 className="text-xl font-bold text-gray-800">Log in</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#002140] mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email here"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#002140] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password here"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#002140] hover:bg-[#2f4255] text-white font-semibold rounded-lg"
            >
              Log in
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <NavLink to="/SignUpNew" className="text-[#002140] font-medium hover:underline ml-1">
                Create an account
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNew;
