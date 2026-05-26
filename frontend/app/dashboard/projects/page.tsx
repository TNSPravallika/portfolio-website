"use client";

import { useEffect, useState } from "react";

import { db } from "@/app/lib/firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
}

export default function ProjectsPage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [projects, setProjects] = useState<Project[]>([]);

  const [editId, setEditId] = useState("");

  // Fetch projects
  const fetchProjects = async () => {

    const querySnapshot = await getDocs(
      collection(db, "projects")
    );

    const data: Project[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Project, "id">),
    }));

    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Add or Update Project
  const handleSubmit = async () => {

    try {

      if (editId) {

        await updateDoc(doc(db, "projects", editId), {
          title,
          description,
        });

        alert("Project Updated 🔥");

        setEditId("");

      } else {

        await addDoc(collection(db, "projects"), {
          title,
          description,
          createdAt: new Date(),
        });

        alert("Project Added 🔥");
      }

      setTitle("");
      setDescription("");

      fetchProjects();

    } catch (error) {

      console.log(error);
      alert("Error");
    }
  };

  // Delete
  const handleDelete = async (id: string) => {

    await deleteDoc(doc(db, "projects", id));

    alert("Deleted");

    fetchProjects();
  };

  // Edit
  const handleEdit = (project: Project) => {

    setTitle(project.title);
    setDescription(project.description);

    setEditId(project.id);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-10">
        Project CMS
      </h1>

      <div className="max-w-2xl space-y-5 mb-12">

        <input
          type="text"
          placeholder="Project Title"
          className="w-full h-14 rounded-2xl bg-zinc-900 border border-zinc-800 px-5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="w-full h-40 rounded-2xl bg-zinc-900 border border-zinc-800 px-5 py-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-2xl font-semibold"
        >
          {editId ? "Update Project" : "Add Project"}
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-zinc-400 mb-5">
              {project.description}
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => handleEdit(project)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
              >
                Delete
              </button>

            </div>
          </div>

        ))}

      </div>
    </div>
  );
}