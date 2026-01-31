export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & Automation',
      skills: [
        { name: 'n8n', level: 95 },
        { name: 'Vapi / Retell', level: 85 },
        { name: 'CRM (eg Airtable, Brevo)', level: 85 },
        { name: 'ManyChat', level: 90 },
        { name: 'Make.com/Zapier', level: 80 },
      ],
    },
    {
      title: 'Development',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Deep Learning', level: 85 },
        { name: 'PostgreSQL/Supabase', level: 80 },
        { name: 'FastAPI', level: 85 },
      ],
    },
    {
      title: 'RAG & Agents',
      skills: [
        { name: 'LangChain', level: 85 },
        { name: 'Vector Databases', level: 80 },
        { name: 'Hybrid Search', level: 85 },
        { name: 'Multi-Agent Systems', level: 80 },
        { name: 'LlamaIndex', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          My <span className="text-emerald-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-emerald-500">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
