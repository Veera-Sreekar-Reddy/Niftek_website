'use client';

import ServiceGroupCard from '@/components/ui/ServiceGroupCard';

const serviceGroups = [
  {
    groupTitle: 'Planning & Design',
    groupDescription: 'Strategic foundation and user-centered design for AI products that deliver exceptional experiences.',
    icon: (
      <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    services: [
      {
        title: 'Product Strategy & Discovery',
        description: 'Strategic AI planning and opportunity identification aligned to business outcomes.',
        detailedContent: {
          paragraph: 'We help organizations define high-impact AI opportunities aligned to business outcomes. Our strategic approach ensures that every AI initiative delivers measurable value.',
          listItems: [
            'Use case scoping and feasibility analysis',
            'Success criteria definition and measurement',
            'Business outcome alignment',
            'ROI assessment and planning',
          ],
        },
      },
      {
        title: 'User-Centric Design',
        description: 'AI-first UX and seamless human-AI collaboration patterns.',
        detailedContent: {
          paragraph: 'Creating intuitive AI-first user experiences that seamlessly integrate artificial intelligence into human workflows. We design interfaces that make AI accessible and powerful.',
          listItems: [
            'AI-first UX flows and interaction patterns',
            'Prompt engineering and optimization',
            'Interactive prototypes and testing',
            'Seamless human-AI collaboration patterns',
          ],
        },
      },
    ],
  },
  {
    groupTitle: 'Development & Integration',
    groupDescription: 'Building intelligent systems with advanced AI models and scalable applications.',
    icon: (
      <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: 'Model Integration & Intelligence Layer',
        description: 'Advanced AI models, RAG systems, and LLM-based copilots.',
        detailedContent: {
          paragraph: 'Building intelligent systems that combine the power of large language models with your organization\'s unique knowledge and workflows.',
          listItems: [
            'LLM-based copilots and assistants',
            'Retrieval-augmented generation (RAG) systems',
            'Fine-tuned models for specific use cases',
            'Integration of public and private knowledge bases',
            'Workflow automation and decision support',
          ],
        },
      },
      {
        title: 'Application Development',
        description: 'Full-stack AI-powered applications across web, mobile, and backend.',
        detailedContent: {
          paragraph: 'Developing scalable, production-ready applications that leverage AI capabilities across web, mobile, and backend systems.',
          listItems: [
            'Frontend: React, Web, and Mobile interfaces',
            'Backend: Scalable APIs and microservices',
            'Model orchestration engines',
            'Real-time AI inference systems',
            'Cloud-native architecture',
          ],
        },
      },
    ],
  },
  {
    groupTitle: 'Quality & Security',
    groupDescription: 'Enterprise-grade security, compliance, and robust DevOps for reliable AI systems.',
    icon: (
      <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    services: [
      {
        title: 'Security, Governance & Compliance',
        description: 'Enterprise security, ISO compliance, and regulatory readiness.',
        detailedContent: {
          paragraph: 'Ensuring your AI systems meet the highest standards of security, governance, and regulatory compliance from day one.',
          listItems: [
            'Role-based access control and data privacy',
            'Auditability and explainability frameworks',
            'ISO 42001, ISO27001 compliance',
            'SOC2, HIPAA, and GDPR readiness',
            'Security best practices and threat modeling',
          ],
        },
      },
      {
        title: 'Testing, Deployment & Maintenance',
        description: 'CI/CD pipelines, monitoring, and continuous quality assurance.',
        detailedContent: {
          paragraph: 'Implementing robust DevOps practices for AI systems, ensuring reliable deployment and continuous monitoring of model performance.',
          listItems: [
            'CI/CD pipelines for models and features',
            'Model drift detection and monitoring',
            'Quality metrics and performance tracking',
            'Uptime monitoring and alerting',
            'Automated testing and validation',
          ],
        },
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-niftek-offwhite py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-niftek-dark mb-16">
            <span className="block">PRODUCT ENGINEERING</span>
            <span className="block">AND QA</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceGroups.map((group, index) => (
              <ServiceGroupCard
                key={index}
                groupTitle={group.groupTitle}
                groupDescription={group.groupDescription}
                services={group.services}
                icon={group.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

