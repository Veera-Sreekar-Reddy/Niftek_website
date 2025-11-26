'use client';

import Link from 'next/link';
import ExpandableServiceCard from '@/components/ui/expandable-service-card';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions including LLM implementations, RAG systems, and AI governance.',
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      ctaText: 'Learn More',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            At Niftek, we provide cutting-edge AI services that transform your business operations. Our comprehensive AI solutions are designed to help you leverage the power of artificial intelligence to drive innovation and efficiency.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Our AI Services Include:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Large Language Model (LLM) Implementation and Integration</li>
              <li>Retrieval-Augmented Generation (RAG) Systems</li>
              <li>AI Governance and Compliance Solutions</li>
              <li>Machine Learning Model Development</li>
              <li>Natural Language Processing (NLP) Solutions</li>
              <li>AI Strategy and Consulting</li>
              <li>Custom AI Application Development</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our team of AI experts works closely with you to understand your unique business needs and develop tailored solutions that deliver measurable results. We ensure that all AI implementations are secure, ethical, and aligned with industry best practices.
          </p>
        </div>
      ),
    },
    {
      title: 'Development',
      description: 'Custom software development and integration services tailored to your business requirements.',
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
      ctaText: 'Get Started',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Our development services encompass the full software development lifecycle, from initial concept to deployment and maintenance. We build scalable, robust applications that grow with your business.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Development Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Custom Web Application Development</li>
              <li>Mobile App Development (iOS & Android)</li>
              <li>API Development and Integration</li>
              <li>Cloud-Native Application Development</li>
              <li>Microservices Architecture</li>
              <li>Legacy System Modernization</li>
              <li>DevOps and CI/CD Pipeline Setup</li>
              <li>Quality Assurance and Testing</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            We use modern technologies and agile methodologies to deliver high-quality software solutions on time and within budget. Our development team is experienced in various programming languages, frameworks, and platforms.
          </p>
        </div>
      ),
    },
    {
      title: 'Cybersecurity',
      description: 'AI-powered security solutions to protect your business from threats and vulnerabilities.',
      src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      ctaText: 'Secure Your Business',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            In today's digital landscape, cybersecurity is paramount. Our AI-powered security solutions provide comprehensive protection against evolving cyber threats, ensuring your business data and systems remain secure.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Cybersecurity Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Threat Detection and Response</li>
              <li>Security Assessment and Auditing</li>
              <li>Penetration Testing</li>
              <li>Security Architecture Design</li>
              <li>Identity and Access Management</li>
              <li>Data Encryption and Protection</li>
              <li>Security Compliance (SOC 2, ISO 27001)</li>
              <li>24/7 Security Monitoring</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our cybersecurity experts use advanced AI and machine learning technologies to detect, prevent, and respond to security threats in real-time. We help you build a robust security posture that protects against both known and emerging threats.
          </p>
        </div>
      ),
    },
    {
      title: 'Consulting',
      description: 'Expert consulting services to help you make informed technology decisions.',
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
      ctaText: 'Consult With Us',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Our consulting services help you navigate the complex world of technology and make strategic decisions that drive business growth. We provide expert guidance tailored to your industry and business objectives.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Consulting Offerings:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Technology Strategy and Roadmap</li>
              <li>Digital Transformation Consulting</li>
              <li>Cloud Migration Strategy</li>
              <li>IT Architecture and Design</li>
              <li>Process Optimization</li>
              <li>Technology Vendor Selection</li>
              <li>Change Management</li>
              <li>Training and Knowledge Transfer</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our consultants bring years of industry experience and deep technical expertise to help you identify opportunities, mitigate risks, and achieve your technology goals. We work as an extension of your team to deliver actionable insights and recommendations.
          </p>
        </div>
      ),
    },
    {
      title: 'Data Solutions',
      description: 'Data management, analytics, and knowledge augmentation services.',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      ctaText: 'Explore Solutions',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Transform your data into actionable insights with our comprehensive data solutions. We help you collect, manage, analyze, and leverage your data to drive informed business decisions.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Data Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Data Strategy and Architecture</li>
              <li>Data Warehousing and ETL</li>
              <li>Business Intelligence and Analytics</li>
              <li>Data Visualization and Reporting</li>
              <li>Knowledge Management Systems</li>
              <li>Data Quality and Governance</li>
              <li>Predictive Analytics and Machine Learning</li>
              <li>Real-time Data Processing</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our data solutions enable you to unlock the full potential of your data assets. We design and implement scalable data infrastructure that supports your current needs while preparing for future growth and innovation.
          </p>
        </div>
      ),
    },
    {
      title: 'Integration',
      description: 'Seamless integration of AI and technology solutions into your existing workflows.',
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      ctaText: 'Integrate Now',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Seamlessly connect your systems, applications, and data sources with our integration services. We ensure that new technologies work harmoniously with your existing infrastructure.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Integration Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>API Integration and Development</li>
              <li>System-to-System Integration</li>
              <li>Cloud Integration Services</li>
              <li>Enterprise Application Integration</li>
              <li>Data Integration and Synchronization</li>
              <li>Third-Party Service Integration</li>
              <li>Workflow Automation</li>
              <li>Integration Testing and Support</li>
            </ul>
          </div>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our integration experts ensure that all your systems communicate effectively, reducing manual work and improving operational efficiency. We design integration solutions that are scalable, maintainable, and secure.
          </p>
        </div>
      ),
    },
    {
      title: 'Cloud Transformation Services',
      description: 'Transform with Cloud to build the digital enterprise of tomorrow',
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      ctaText: 'Transform Now',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Conversations regarding the cloud have evolved significantly - from being merely about cost optimization and improved agility and scale, to being about the cloud's role as a key enabler of transformation in today's enterprise.
          </p>
          <p className="text-niftek-dark/90 leading-relaxed">
            Customers are looking to the cloud to enable them to deliver business resilience, help transform into a leading digital enterprise and deliver consistent sustainable growth. Given this, the business world is witnessing a mad dash to the cloud. In this haste to stay competitive, enterprises find themselves at different stages of the cloud adoption journey, with some thriving and others still making sense of the investments they've made.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Cloud Transformation Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Cloud Strategy and Roadmap Development</li>
              <li>Cloud Migration and Modernization</li>
              <li>Multi-Cloud and Hybrid Cloud Solutions</li>
              <li>Cloud-Native Application Development</li>
              <li>Infrastructure as Code (IaC) Implementation</li>
              <li>Cloud Cost Optimization and Management</li>
              <li>DevOps and CI/CD on Cloud Platforms</li>
              <li>Cloud Security and Compliance</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Actionable Business Insights',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      ctaText: 'Get Insights',
      ctaLink: '/contact',
      content: () => (
        <div className="space-y-4">
          <p className="text-niftek-dark/90 leading-relaxed">
            Your data, no matter how big or small, has a story to tell. We all know that a picture is worth a thousand words. So why are you still flipping through pages of numbers? Business Intelligence will surface the right information to accelerate decision-making.
          </p>
          <p className="text-niftek-dark/90 leading-relaxed">
            Our intelligence solutions allow your organization data to tell its unique story. With truly accessible data, users can design and deploy their own reports and analyses based on one source of truth. Our expertise in Power BI and Tableau will help you deliver actionable enterprise-level insights across your organization.
          </p>
          <div>
            <h4 className="font-semibold text-niftek-dark mb-2">Business Intelligence Services:</h4>
            <ul className="list-disc list-inside space-y-2 text-niftek-dark/80">
              <li>Power BI Implementation and Development</li>
              <li>Tableau Dashboard Creation and Optimization</li>
              <li>Data Visualization and Reporting</li>
              <li>Self-Service BI Solutions</li>
              <li>Data Warehousing and ETL Processes</li>
              <li>Advanced Analytics and Predictive Modeling</li>
              <li>Real-Time Business Intelligence</li>
              <li>Custom Analytics Solutions</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-niftek-offwhite min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-niftek-dark/70">
            <li>
              <Link href="/" className="hover:text-niftek-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-niftek-dark font-medium">Services</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Services
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Discover our comprehensive range of services designed to meet your business needs. Click on any service card to learn more.
          </p>
        </div>

        {/* Services Grid with Expandable Cards */}
        <div className="max-w-7xl mx-auto">
          <ExpandableServiceCard cards={services} />
        </div>
      </div>
    </div>
  );
}
