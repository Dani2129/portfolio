import { FiBriefcase as Briefcase, FiCalendar as Calendar } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      role: "AI Content Evaluation",
      company: "AfterQuery",
      type: "Remote",
      date: "Current",
      description: "Evaluate AI-generated responses, review content quality, analyze outputs, and contribute to improving AI systems.",
    },
    {
      role: "Networking & ICT Support",
      company: "Various Practical Environments",
      type: "On-site",
      date: "Past Experience",
      description: "Practical experience working in Networking and ICT environments, supporting technical infrastructure, troubleshooting systems, and assisting with network-related tasks.",
    },
    {
      role: "ICT Intern",
      company: "OBN TV",
      type: "Internship",
      date: "Completed",
      description: "Gained practical exposure to professional ICT and technology environments, technical operations, and real-world workplace collaboration.",
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-300 before:to-transparent">
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl hover:shadow-primary-500/10 transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                    <h3 className="font-bold text-xl text-gray-800 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.date}
                    </div>
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium mb-4 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    <span className="text-sm">{exp.type}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
