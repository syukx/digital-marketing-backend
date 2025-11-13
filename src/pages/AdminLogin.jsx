import React, { useState } from "react";
import { Lock } from "lucide-react";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Your backend URL (make sure it matches your deployed backend)
  const API_URL = "https://digital-marketing-backend-pxedg557e-syukxs-projects.vercel.app/api/admin-password";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // ✅ Fetch the admin password from the backend
      const response = await fetch(`${API_URL}/api/admin-password`);
      const data = await response.json();

      if (!data.password) {
        setError("⚠️ Admin password not set on the backend (.env missing).");
        return;
      }

      if (password === data.password) {
        localStorage.setItem("isAdmin", "true");
        onLogin();
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch (err) {
      console.error("❌ Error verifying admin password:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800 ml-2">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
