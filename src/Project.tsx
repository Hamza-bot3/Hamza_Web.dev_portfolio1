import { useState } from "react";
import { FaGlobe, FaWordpress, FaShopify } from "react-icons/fa";

type ProjectType = "web" | "wordpress" | "shopify";

interface Project {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager App",
    type: "web",
    description:
      "A full-stack task management application with real-time updates.",
    link: "#",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    type: "web",
    description: "An interactive weather app with location-based forecasts.",
    link: "#",
  },
  {
    id: 3,
    title: "E-learning Platform",
    type: "web",
    description: "A comprehensive online learning system with video courses.",
    link: "#",
  },
  {
    id: 4,
    title: "Breathe Dream Go",
    type: "wordpress",
    description:
      "A captivating travel blog showcasing India's beauty and culture.",
    link: "https://breathedreamgo.com/india-travel-guide/",
  },
  {
    id: 5,
    title: "Oliver Holder Photography",
    type: "wordpress",
    description:
      "A stunning portfolio website for a professional photographer.",
    link: "https://www.oliverholder.co.uk/portfolio",
  },
  {
    id: 6,
    title: "Amplify Craze",
    type: "wordpress",
    description: "A dynamic marketing agency website with modern design.",
    link: "https://amplifycraze.com/",
  },
  {
    id: 7,
    title: "Indulge Dining",
    type: "wordpress",
    description: "An elegant restaurant website showcasing culinary delights.",
    link: "https://indulgedining.co.uk/",
  },
  {
    id: 8,
    title: "Fiola Mare",
    type: "wordpress",
    description:
      "A sophisticated seafood restaurant website with online reservations.",
    link: "https://www.fiolamaredc.com/",
  },
  {
    id: 9,
    title: "eVisually",
    type: "wordpress",
    description:
      "A professional clipping path service website with portfolio showcase.",
    link: "https://www.evisually.com/",
  },
  {
    id: 10,
    title: "Hakkasan Mumbai",
    type: "shopify",
    description:
      "An elegant restaurant website with online reservation system.",
    link: "https://hakkasan.com/mumbai/",
  },
  {
    id: 11,
    title: "Organic Tattva",
    type: "shopify",
    description:
      "A user-friendly e-commerce platform for organic food products.",
    link: "https://organictattva.com/",
  },
  {
    id: 12,
    title: "TechShop",
    type: "shopify",
    description:
      "A sleek online store for the latest tech gadgets and accessories.",
    link: "https://techshop.lk/",
  },
];

export default function ProjectSection() {
  const [filter, setFilter] = useState<"all" | ProjectType>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-800 via-purple-700 to-cyan-600"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
          My Projects
        </h2>
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200">
          <button
            onClick={() => setFilter("all")}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-white text-purple-700"
                : "bg-purple-700 text-white"
            } transition-colors duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "web"
                ? "bg-white text-purple-700"
                : "bg-purple-700 text-white"
            } transition-colors duration-300`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setFilter("wordpress")}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "wordpress"
                ? "bg-white text-purple-700"
                : "bg-purple-700 text-white"
            } transition-colors duration-300`}
          >
            WordPress
          </button>
          <button
            onClick={() => setFilter("shopify")}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "shopify"
                ? "bg-white text-purple-700"
                : "bg-purple-700 text-white"
            } transition-colors duration-300`}
          >
            Shopify
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const icons = {
    web: <FaGlobe className="w-6 h-6" />,
    wordpress: <FaWordpress className="w-6 h-6" />,
    shopify: <FaShopify className="w-6 h-6" />,
  };

  return (
    <div
      className={`bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl transition-all duration-300 hover:bg-opacity-20 hover:transform hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-cyan-300 mb-4">{icons[project.type]}</div>
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-cyan-100 text-sm mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-300 hover:text-white transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
}
