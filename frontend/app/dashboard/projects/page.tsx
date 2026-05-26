"use client";

import { useState } from "react";

import { db } from "@/app/lib/firebase";

import {
  collection,
  addDoc,
} from "firebase/firestore";

export default function ProjectsPage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {

    try {

      await addDoc(collection(db, "projects"), {
        title,
        description,
        createdAt: new Date(),
      });

      alert("Project Saved 🔥");

      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error);
      alert("Error saving project");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-10">
        Upload Project
      </h1>

      <div className="max-w-2xl space-y-5">

        {/* Title */}
        <input
          type="text"
          placeholder="Project Title"
          className="w-full h-14 rounded-2xl bg-zinc-900 border border-zinc-800 px-5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <textarea
          placeholder="Project Description"
          className="w-full h-40 rounded-2xl bg-zinc-900 border border-zinc-800 px-5 py-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl font-semibold"
        >
          Add Project
        </button>

      </div>
    </div>
  );
}