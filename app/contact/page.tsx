'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <li className="text-niftek-dark font-medium">Contact Us</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center relative overflow-hidden rounded-2xl">
          {/* Abstract Gradient Background with Layered Curves */}
          <div className="absolute inset-0">
            {/* Base gradient */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #2b6777 0%, #52ab98 50%, #c8d8e4 100%)',
              }}
            />
            
            {/* Layered curved shapes using SVG */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              style={{ opacity: 0.4 }}
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2b6777" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#52ab98" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#52ab98" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c8d8e4" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2b6777" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#52ab98" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c8d8e4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Curved layer 1 - bottom right to top left */}
              <path
                d="M0,400 Q200,350 400,300 T800,200 T1200,150 L1200,400 Z"
                fill="url(#grad1)"
              />
              
              {/* Curved layer 2 - middle wave */}
              <path
                d="M0,300 Q300,250 600,200 T1200,100 L1200,400 L0,400 Z"
                fill="url(#grad2)"
              />
              
              {/* Curved layer 3 - top wave */}
              <path
                d="M0,250 Q250,200 500,150 T1000,80 T1200,50 L1200,400 L0,400 Z"
                fill="url(#grad3)"
              />
              
              {/* Additional smooth curves */}
              <path
                d="M0,350 Q150,320 300,290 T600,230 T900,180 T1200,140 L1200,400 L0,400 Z"
                fill="#52ab98"
                fillOpacity="0.2"
              />
              
              <path
                d="M0,280 Q200,240 400,200 T800,120 T1200,70 L1200,400 L0,400 Z"
                fill="#c8d8e4"
                fillOpacity="0.25"
              />
            </svg>
            
            {/* Radial gradient overlays for depth */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 40% at 20% 50%, #2b6777 0%, transparent 60%),
                  radial-gradient(ellipse 50% 35% at 80% 30%, #52ab98 0%, transparent 55%),
                  radial-gradient(ellipse 70% 50% at 60% 70%, #c8d8e4 0%, transparent 65%)
                `,
                mixBlendMode: 'multiply',
                opacity: 0.3,
              }}
            />
          </div>
          
          {/* Content with relative positioning */}
          <div className="relative z-10 py-12 md:py-16 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Thank you for your interest in Niftek Inc. Please fill the form and submit your request with all your inquiries, one of our representatives will be in contact with you soon.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-6">Write Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-niftek-dark mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                      placeholder="Anderson"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-niftek-dark mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-niftek-dark mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                    placeholder="555-555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-niftek-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                    placeholder="example@mail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-niftek-dark mb-2">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40 resize-none"
                    placeholder="Add your Description here"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-niftek-medium text-white py-3 px-6 rounded-lg font-semibold hover:bg-niftek-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-6">Reach Us</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-niftek-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Address</h3>
                    <p className="text-niftek-dark/80 leading-relaxed">
                      5899 Preston Rd<br />
                      Suite 1204<br />
                      Frisco, Texas 75034
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-niftek-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Phone</h3>
                    <a
                      href="tel:7039627755"
                      className="text-niftek-medium hover:text-niftek-dark transition-colors"
                    >
                      703.962.7755
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-niftek-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Fax</h3>
                    <p className="text-niftek-dark/80">703.962.7888</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-niftek-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Email</h3>
                    <a
                      href="mailto:hr@niftek.com"
                      className="text-niftek-medium hover:text-niftek-dark transition-colors"
                    >
                      hr@niftek.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

