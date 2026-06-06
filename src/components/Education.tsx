import { FiBook as GraduationCap, FiBookOpen as BookOpen, FiGlobe as Languages } from 'react-icons/fi';

export default function Education() {
  const coursework = [
    "Object-Oriented Programming", "Data Structures and Algorithms", 
    "Database Systems", "Software Engineering", 
    "Operating Systems", "Computer Networks",
    "Artificial Intelligence", "Data Mining",
    "Internet of Things (IoT)", "Human-Computer Interaction"
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Background</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
            </div>
            
            <div className="glass-card p-8">
              <div className="mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Bachelor's Degree in Computer Science and Engineering</h4>
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm font-medium">
                  <span>Adama, Ethiopia</span>
                  <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 px-3 py-1 rounded-full">Final Year (5th Year)</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-4 text-gray-800 dark:text-gray-200 font-semibold">
                  <BookOpen size={18} className="text-accent-500" />
                  <h5>Relevant Coursework</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1.5 rounded-md border border-gray-200 dark:border-gray-700">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-primary-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Languages</h3>
            </div>
            
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Afaan Oromo</span>
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">Native</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">Amharic</span>
                <span className="text-sm font-bold text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-900/30 px-3 py-1 rounded-full">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div className="bg-accent-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">English</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
