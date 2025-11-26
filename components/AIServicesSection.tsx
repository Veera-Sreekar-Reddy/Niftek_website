'use client';
const content = [
  {
    title: 'LLM & RAG Implementations',
    description:
      'Build intelligent assistants using GPT-4o, Gemini, Claude, or open-source models. Implement Retrieval-Augmented Generation (RAG) for grounded, source-backed responses. Deploy LangChain, LangGraph, or custom pipelines tailored to enterprise data.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'Intelligent AI Assistants',
  },
  {
    title: 'Knowledge Augmentation',
    description:
      'Ingest PDFs, policy documents, logs, transcripts, and structured data. Organize knowledge into reusable embeddings or graph structures. Enable semantic recall and long-term memory in assistants and copilots.',
    gradient: 'linear-gradient(to bottom right, #2b6777, #1a4a56)',
    subtitle: 'Semantic Memory Systems',
  },
  {
    title: 'AI Integration & API Orchestration',
    description:
      'Seamlessly embed AI into existing business systems and user workflows. Connect models with databases, CRM, ticketing systems, and cloud services.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'Seamless Workflow Integration',
  },
  {
    title: 'AI Governance & Compliance',
    description:
      'Design and implement governance frameworks: model cards, audit trails, bias testing. Ensure traceability, version control, and explainability in production pipelines. Align with NIST AI RMF, ISO 42001, EU AI Act, and internal risk policies.',
    gradient: 'linear-gradient(to bottom right, #2b6777, #1a4a56)',
    subtitle: 'Compliance & Risk Management',
  },
  {
    title: 'AI for Cybersecurity',
    description:
      'Augment SOC and threat intel workflows with LLM-based summarization, alert triage, and phishing detection. Build RAG-powered copilots for security analysts and compliance teams. Embed security by design: prompt injection defense, role-based access, encrypted memory.',
    gradient: 'linear-gradient(to bottom right, #1a4a56, #2b6777)',
    subtitle: 'AI-Powered Security Solutions',
  },
];

export default function AIServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-niftek-light/60"
              >
                {/* Gradient header */}
                <div
                  className="h-32 flex items-center justify-center text-white relative"
                  style={{ background: item.gradient }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center px-4">
                    <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                    <p className="text-sm opacity-95 text-white">{item.subtitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm md:text-base text-niftek-dark/80 leading-relaxed">
                    {item.description}
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

