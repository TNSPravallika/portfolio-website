"use client";

import Link from "next/link";

export default function DashboardPage() {

  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* Header */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-6xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Manage your portfolio website
          </p>

        </div>

        <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl text-xl font-semibold">
          Logout
        </button>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-8">

        {/* Projects */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-4">
            Projects
          </h2>

          <p className="text-zinc-400 mb-8 text-lg">
            Upload and manage projects
          </p>

          <Link href="/dashboard/projects">

            <button className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-2xl text-lg font-semibold">
              Manage
            </button>

          </Link>

        </div>

        {/* Resume */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-4">
            Resume
          </h2>

          <p className="text-zinc-400 mb-8 text-lg">
            Upload latest resume PDF
          </p>

          <Link href="/dashboard/resume">

            <button className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-2xl text-lg font-semibold">
              Upload
            </button>

          </Link>

        </div>

        {/* Messages */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-4xl font-bold mb-4">
            Messages
          </h2>

          <p className="text-zinc-400 mb-8 text-lg">
            View contact form messages
          </p>

          <Link href="/dashboard/messages">

            <button className="bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-2xl text-lg font-semibold">
              Open
            </button>

          </Link>

        </div>

      </div>

    </div>

  );
}