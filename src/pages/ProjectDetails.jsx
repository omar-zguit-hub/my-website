import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

import { FaGithub } from "react-icons/fa";

import { FiChevronLeft, FiChevronRight, FiArrowLeft } from "react-icons/fi";

import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="flex min-h-full items-center justify-center bg-[#1e1e1e] text-white">
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold">Project not found</h1>

          <Link to="/" className="text-blue-400 transition hover:text-blue-300">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const images = project.images?.length ? project.images : [project.image];

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex-1 min-h-0 w-full overflow-y-auto bg-[#1e1e1e] text-white">
      <div className="mx-auto w-full max-w-6xl px-2 py-6 md:px-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold md:text-2xl">Project Details</h1>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-300 transition hover:border-gray-500 hover:text-white"
          >
            <FiArrowLeft size={17} />
            Back
          </Link>
        </div>

        {/* Image Gallery */}
        <section className="relative z-0 mx-auto mb-6 w-full max-w-4xl overflow-hidden rounded-xl border border-gray-800 bg-[#252526]">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-0 flex h-[250px] w-full items-center justify-center sm:h-[350px] md:h-[450px]"
          >
            <img
              src={images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="block h-full w-full object-contain"
            />

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-black"
              >
                <FiChevronLeft size={22} />
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-black"
              >
                <FiChevronRight size={22} />
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm">
                {currentImage + 1} / {images.length}
              </div>
            )}
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="grid gap-6 md:grid-cols-3">
          {/* Description */}
          <div className="rounded-xl border border-gray-800 bg-[#252526] p-5 md:col-span-2">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
              About the project
            </p>

            <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>

            <p className="leading-7 text-gray-400">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="rounded-xl border border-gray-800 bg-[#252526] p-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md border border-gray-700 bg-[#1e1e1e] px-3 py-1.5 text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              <FaGithub size={18} />
              View Code
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-gray-500 hover:text-white"
            >
              Live Demo
            </a>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProjectDetails;
