import { Eye, X } from 'lucide-react';
import { useState } from 'react';

// Import images from AI Workflows folder
import b2bLeadGeneration from '../../AI Workflows/B2B Lead Generation.png';
import leadGenVapi from '../../AI Workflows/Lead Generation Using n8n & Vapi.png';
import linkedinScraper from '../../AI Workflows/LinkedIn Data Scraper.png';
import metadataAgent from '../../AI Workflows/MetaData_Agent.png';
import fbIgN8n from '../../AI Workflows/Fb & IG Chatbot.png';
import ragMultipleAgents from '../../AI Workflows/RAG Agent Multiple agents.png';
import ragSupabase from '../../AI Workflows/RAG Agent with Supa Base.png';
import ragHybridV2 from '../../AI Workflows/Rag Agent using Hybird Search.png';
import fbIgManyChat from '../../AI Workflows/Fb & IG using ManyChat.png';
import whatsappAgent from '../../AI Workflows/Whatsapp Agent.png';
import advancedPipeline from '../../AI Workflows/Screenshot from 2025-12-24 16-50-27.png';

export default function Projects() {
  const projects = [
    {
      title: 'B2B Lead Generation System',
      description:
        'Automated B2B lead generation workflow that identifies, qualifies, and scores potential leads using AI-powered analysis',
      technologies: ['n8n', 'AI', 'Lead Scoring', 'API Integration'],
      image: b2bLeadGeneration,
      category: 'Lead Generation',
    },
    {
      title: 'AI Voice Lead Generation',
      description:
        'Voice-powered lead generation system combining n8n automation with Vapi for intelligent voice interactions and automated follow-ups.',
      technologies: ['n8n', 'Vapi', 'Voice AI', 'Automation'],
      image: leadGenVapi,
      category: 'Voice AI',
    },
    {
      title: 'LinkedIn Data Scraper',
      description:
        'Intelligent LinkedIn scraping pipeline that extracts and processes professional data for lead qualification and outreach automation.',
      technologies: ['n8n', 'Data Scraping', 'LinkedIn API', 'ETL'],
      image: linkedinScraper,
      category: 'Data Pipeline',
    },
    {
      title: 'MetaData AI Agent',
      description:
        'Autonomous AI agent for metadata extraction, analysis, and organization across multiple content types and data sources.',
      technologies: ['n8n', 'AI Agent', 'Metadata', 'NLP'],
      image: metadataAgent,
      category: 'AI Agent',
    },
    {
      title: 'Facebook and Instagram chatbot with n8n',
      description:
        'Intelligent chatbot for Facebook and Instagram automated using n8n for seamless customer engagement.',
      technologies: ['n8n', 'Facebook API', 'Instagram API', 'Chatbot'],
      image: fbIgN8n,
      category: 'Chatbot',
    },
    {
      title: 'Facebook and Instagram chatbot with ManyChat',
      description:
        'Automated conversational agent for social media platforms built with ManyChat for robust engagement and marketing.',
      technologies: ['ManyChat', 'Social Media', 'Automation', 'Marketing'],
      image: fbIgManyChat,
      category: 'Chatbot',
    },
    {
      title: 'RAG Agent with Supabase',
      description:
        'Production-ready RAG system leveraging Supabase for vector storage, authentication, and real-time data synchronization.',
      technologies: ['RAG', 'Supabase', 'Vector DB', 'PostgreSQL'],
      image: ragSupabase,
      category: 'RAG',
    },
    {
      title: 'Advanced Hybrid Search RAG',
      description:
        'Enhanced RAG implementation with BM25 + semantic search fusion for optimal retrieval accuracy and context relevance.',
      technologies: ['RAG', 'BM25', 'Semantic Search', 'Reranking'],
      image: ragHybridV2,
      category: 'RAG',
    },
    {
      title: 'WhatsApp AI Agent',
      description:
        'Intelligent WhatsApp chatbot powered by n8n for automated customer support, lead qualification, and conversational commerce.',
      technologies: ['WhatsApp', 'n8n', 'Conversational AI', 'NLP'],
      image: whatsappAgent,
      category: 'Conversational AI',
    },
    {
      title: 'Advanced AI Pipeline',
      description:
        'Multi-step AI processing pipeline orchestrating complex workflows with conditional logic, error handling, and performance monitoring.',
      technologies: ['n8n', 'AI Pipeline', 'Multi-step', 'Monitoring'],
      image: advancedPipeline,
      category: 'AI Pipeline',
    },
    {
      title: 'Multi-Agent RAG System',
      description:
        'Orchestrated multi-agent RAG system where specialized agents collaborate to handle complex queries and document processing.',
      technologies: ['Multi-Agent', 'RAG', 'Orchestration', 'LLM'],
      image: ragMultipleAgents,
      category: 'RAG',
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ... (projects array remains unchanged, I will just show the return block modification)

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          A showcase of AI workflows, automation systems, and intelligent agents I've built
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="px-4 py-2 bg-emerald-500/90 rounded-full text-sm font-medium flex items-center gap-2">
                    <Eye size={16} />
                    View Workflow
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-3 py-1 bg-slate-900/80 text-emerald-400 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm line-clamp-3 h-[3.75rem]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-emerald-500 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-emerald-500 transition-colors bg-slate-800/50 p-2 rounded-full hover:bg-slate-800"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
          >
            <img
              src={selectedImage}
              alt="Workflow Diagram"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
