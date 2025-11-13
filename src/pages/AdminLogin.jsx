import React, { useState } from "react";
import { Lock } from "lucide-react";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Detect environment type automatically
  const ADMIN_PASSWORD =
    import.meta?.env?.VITE_ADMIN_PASSWORD || process.env.REACT_APP_ADMIN_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ADMIN_PASSWORD) {
      setError(
        "⚠️ Admin password not set. Please add it to your .env file (VITE_ADMIN_PASSWORD or REACT_APP_ADMIN_PASSWORD)."
      );
      return;
    }

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      setError("");
      onLogin();
    } else {
      setError("Incorrect password. Try again.");
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
