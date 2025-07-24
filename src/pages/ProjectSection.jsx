import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    id: 1,
    title: "Momo",
    description:
      "A restaurant frontend where users can browse menus, add items to cart, log in, and make payments via eSewa using dummy APIs.",
    img: "/projects/project2.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://momo-roan.vercel.app/",
    githubUrl: "https://github.com/sthaRajan450/Momo",
  },

  {
    id: 3,
    title: "Manish Photos",
    description:
      "A frontend project for photographers to display their work, manage bookings, and highlight services using a clean, responsive UI.",
    img: "/projects/project3.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://manishphotos.vercel.app/",
    githubUrl: "https://github.com/sthaRajan450/Photo-Portfolio",
  },
  {
    id: 2,
    title: "ITMS",
    description:
      "A web-based IT Training Management System for managing courses, instructors, students, and assignments with full-stack MERN implementatio",
    img: "/projects/project1.png",
    tags: ["React", "Node JS", "MongoDB"],
    demoUrl: "https://itms-chi.vercel.app/",
    githubUrl: "https://github.com/sthaRajan450/ITMS",
  },
];
const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full1 h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <div
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm  mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center px-6 py-4">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/sthaRajan450"
            target="_blank"
            className="cosmic-button w-fit  flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
