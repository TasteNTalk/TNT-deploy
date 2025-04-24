import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../../assets/loginImage.jpg";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignUpNew = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("user");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: fullName,
          email,
          password,
          accountType,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful! Please log in.");
        navigate("/LoginNew");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    alert("Google Login successful! Redirecting...");
    setTimeout(() => {
      navigate('/home');
    }, 1500);
  };

  const handleGoogleLoginError = () => {
    alert("Google Login failed. Try again.");
  };

  return (
    <GoogleOAuthProvider clientId="200023148286-clhbnme6pmsqvpk0do9s1h1pp4h0qmdc.apps.googleusercontent.com">
      <div className="bg-[#002140] min-h-screen flex justify-center items-center p-4">
        <div className="flex w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="hidden md:block w-1/2 bg-center">
            <img src={Login} className="bg-cover" alt="Signup" />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-10 bg-gradient-to-br from-gray-50 to-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium text-[#002140] mb-4">
                Taste'n Talk
              </h1>
              <h2 className="text-lg font-bold text-gray-600">
                Create your Free Account
              </h2>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#002140] mb-2">
                  I am a:
                </label>
                <div className="flex gap-4">
                  {["user", "instructor"].map((role) => (
                    <label key={role} className="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name="accountType"
                        value={role}
                        checked={accountType === role}
                        onChange={() => setAccountType(role)}
                        className="mr-2"
                      />
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#002140] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your Full Name here"
                  className="w-full px-4 py-3 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#002140] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email here"
                  className="w-full px-4 py-3 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-blue-900"
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
                  className="w-full px-4 py-3 bg-gray-200 border-none rounded-lg focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  Creating an account means you accept our Terms of Service, Privacy Policy, and Notification Settings.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#002140] hover:bg-[#163755] text-white font-semibold rounded-lg transition duration-200"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                Already have an account?
                <NavLink to="/LoginNew" className="text-[#002140] font-medium hover:underline ml-1">
                  Log in
                </NavLink>
              </p>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <div className="border-t w-full border-gray-300" />
              <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
              <div className="border-t w-full border-gray-300" />
            </div>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={handleGoogleLoginError}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUpNew;
