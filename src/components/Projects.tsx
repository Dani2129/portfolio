import { FiExternalLink as ExternalLink, FiGithub as Github, FiFolder as Folder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Interview Prep",
      description: "Developed an AI-powered interview preparation platform that helps users prepare for interviews through role-based questions, answer guidance, and personalized interview practice.",
      tags: ["React", "Node.js", "AI/Prompt Engineering", "Tailwind"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Full-Stack Web Application",
      description: "Practical project demonstrating proficiency in full-stack development, API integration, and responsive design.",
      tags: ["Full-Stack", "Database", "REST API"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Networking Analysis Tool",
      description: "Academic project focused on network troubleshooting and system maintenance concepts.",
      tags: ["Networking", "Python", "Data Analysis"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            A selection of my recent academic and practical projects spanning Full-Stack Development, AI, and Networking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 flex flex-col h-full group ${project.featured ? 'md:col-span-2 lg:col-span-1 border-2 border-primary-500/50' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl">
                  <Folder size={28} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-500 hover:text-primary-500 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-gray-500 hover:text-primary-500 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-primary-600 dark:text-primary-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
