"use client";

import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
}

export default function Projects() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

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

    fetchProjects();

  }, []);

  return (
    <section className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="text-zinc-400">
              {project.description}
            </p>
          </div>

        ))}

      </div>
    </section>
  );
}