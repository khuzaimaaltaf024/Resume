import { Bot, Workflow, Zap, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Workflow, label: 'AI Workflows Built', value: '15+' },
    { icon: Bot, label: 'AI Projects', value: '20+' },
    { icon: Zap, label: 'Hours Saved', value: '100+' },
    { icon: Users, label: 'Happy Clients', value: '5+' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          About <span className="text-emerald-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed text-justify">
              I'm an AI Automation Specialist passionate about transforming complex business processes
              into intelligent, seamless workflows. With extensive experience in n8n, Vapi, Retell AI, Supabase, Manychat, Elevenlabs, RAG agents, different CRMs like Airtable and Brevo, and
              cutting-edge AI technologies, I help businesses automate their operations and scale efficiently.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed text-justify">
              My expertise spans building sophisticated AI agents, implementing RAG (Retrieval-Augmented Generation) systems with hybrid search capabilities,
              automations using Manychat, voice AI integrations using Vapi, and Facebook & Messenger AI integrations. I create end-to-end
              automation pipelines that save hundreds of hours of manual work.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed text-justify">
              From B2B lead generation systems to WhatsApp AI agents, I specialize in delivering
              production-ready automation solutions that drive real business outcomes. Let's build
              something intelligent together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <stat.icon className="text-emerald-500 mb-4" size={32} />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
