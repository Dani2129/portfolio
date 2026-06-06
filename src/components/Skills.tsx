export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "AI & Data",
      skills: ["AI Fundamentals", "Content Evaluation", "Data Analysis", "Data Mining", "Big Data", "Prompt Engineering"]
    },
    {
      title: "Networking & ICT",
      skills: ["Computer Networking", "ICT Support", "Network Troubleshooting", "System Maintenance"]
    },
    {
      title: "Tools & OS",
      skills: ["Git", "GitHub", "Linux", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 border-t-4 border-t-primary-500 hover:border-t-accent-400 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md font-medium"
                  >
                    {skill}
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
