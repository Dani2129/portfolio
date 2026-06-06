import { FiCode as Code, FiServer as Server, FiDatabase as Database, FiGlobe as Globe, FiZap as Lightbulb, FiCpu as Cpu } from 'react-icons/fi';

export default function About() {
  const cards = [
    { icon: <Code size={32} />, title: "Frontend", desc: "React, Next.js, HTML/CSS" },
    { icon: <Server size={32} />, title: "Backend", desc: "Node.js, Express.js" },
    { icon: <Database size={32} />, title: "Database", desc: "MongoDB, MySQL, PostgreSQL" },
    { icon: <Cpu size={32} />, title: "AI & Data", desc: "Data Mining, Prompt Engineering" },
    { icon: <Globe size={32} />, title: "Networking", desc: "Troubleshooting, Maintenance" },
    { icon: <Lightbulb size={32} />, title: "Problem Solving", desc: "Algorithms & Data Structures" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Who am I?
            </h3>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 mb-8">
              <p>
                My name is Daniel. I am a 5th-year Bachelor's degree student in Computer Science and Engineering. I have a broad range of interests spanning Full-Stack Development, Artificial Intelligence, Data Analysis, UI/UX Design, and Networking.
              </p>
              <p>
                I enjoy building practical software solutions, learning modern technologies, and solving complex technical problems. I'm particularly interested in working on AI-powered applications and robust backend systems.
              </p>
              <p>
                My goal is to develop into a well-rounded software engineer capable of contributing to web applications, AI-driven systems, data-related projects, and networking infrastructure. I believe in writing clean, maintainable code and building intuitive user experiences.
              </p>
            </div>

            {/* Inspirational Quote */}
            <div className="relative p-6 glass-card border-l-4 border-l-primary-500 overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 italic leading-relaxed relative z-10">
                "እግዚአብሔር የርስቴ እድል ፈንታና ጽዋዬ ነው፤ ዕጣዬንም የምታጠና አንተ ነህ።"
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="glass-card p-6 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{card.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
