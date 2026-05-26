"use client";

import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Dashboard() {

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage your portfolio website
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-3">
            Projects
          </h2>

          <p className="text-zinc-400 mb-5">
            Upload and manage projects
          </p>

          <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl">
            Manage
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-3">
            Resume
          </h2>

          <p className="text-zinc-400 mb-5">
            Upload latest resume PDF
          </p>

          <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl">
            Upload
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-3">
            Messages
          </h2>

          <p className="text-zinc-400 mb-5">
            View contact form messages
          </p>

          <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl">
            Open
          </button>
        </div>

      </div>
    </div>
  );
}