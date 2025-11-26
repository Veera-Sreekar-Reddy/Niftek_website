'use client';

import ServiceGroupCard from '@/components/ui/ServiceGroupCard';

export const serviceGroups = [
  {
    groupTitle: 'AI Product Engineering',
    groupDescription: 'Strategic planning, design, and development of intelligent AI-powered products and applications.',
    icon: (
      <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
  {
    groupTitle: 'Cloud & Business Intelligence',
    groupDescription: 'Transform with Cloud and unlock actionable business insights through advanced analytics.',
    icon: (
      <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    services: [
      {
        title: 'Cloud Transformation Services',
        description: 'Transform with Cloud to build the digital enterprise of tomorrow',
        detailedContent: {
          paragraph: 'Conversations regarding the cloud have evolved significantly - from being merely about cost optimization and improved agility and scale, to being about the cloud\'s role as a key enabler of transformation in today\'s enterprise. Customers are looking to the cloud to enable them to deliver business resilience, help transform into a leading digital enterprise and deliver consistent sustainable growth. Given this, the business world is witnessing a mad dash to the cloud. In this haste to stay competitive, enterprises find themselves at different stages of the cloud adoption journey, with some thriving and others still making sense of the investments they\'ve made.',
          listItems: [
            'Cloud strategy and roadmap development',
            'Cloud migration and modernization',
            'Multi-cloud and hybrid cloud solutions',
            'Cloud-native application development',
            'Infrastructure as Code (IaC) implementation',
            'Cloud cost optimization and management',
            'DevOps and CI/CD on cloud platforms',
            'Cloud security and compliance',
          ],
        },
      },
      {
        title: 'Business Intelligence & Analytics',
        description: 'Actionable Business Insights',
        detailedContent: {
          paragraph: 'Your data, no matter how big or small, has a story to tell. We all know that a picture is worth a thousand words. So why are you still flipping through pages of numbers? Business Intelligence will surface the right information to accelerate decision-making. Our intelligence solutions allow your organization data to tell its unique story. With truly accessible data, users can design and deploy their own reports and analyses based on one source of truth. Our expertise in Power BI and Tableau will help you deliver actionable enterprise-level insights across your organization.',
          listItems: [
            'Power BI implementation and development',
            'Tableau dashboard creation and optimization',
            'Data visualization and reporting',
            'Self-service BI solutions',
            'Data warehousing and ETL processes',
            'Advanced analytics and predictive modeling',
            'Real-time business intelligence',
            'Custom analytics solutions',
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
            <span className="block">PRODUCT ENGINEERING & QA</span>
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

