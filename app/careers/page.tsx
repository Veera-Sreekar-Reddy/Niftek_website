'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('coverLetter', formData.coverLetter);
      
      if (resume) {
        formDataToSend.append('resume', resume);
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
      });
      setResume(null);
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
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
            <li className="text-niftek-dark font-medium">Careers</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-niftek-dark mb-4">
            Careers
          </h1>
          <p className="text-lg text-niftek-dark/80 max-w-3xl mx-auto">
            Join our team and help shape the future of technology. Explore exciting career opportunities at Niftek Inc.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Why Work With Us Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-4">Why Work With Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Innovative Projects</h3>
                    <p className="text-niftek-dark/80 leading-relaxed">
                      Work on cutting-edge AI and technology projects that make a real impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Collaborative Team</h3>
                    <p className="text-niftek-dark/80 leading-relaxed">
                      Join a supportive team that values collaboration, learning, and growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-niftek-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-niftek-dark mb-1">Career Growth</h3>
                    <p className="text-niftek-dark/80 leading-relaxed">
                      Opportunities for professional development and career advancement.
                    </p>
                  </div>
                </div>
              </div>

              {/* No Job Openings Notice */}
              {/* <div className="mt-6 p-4 bg-niftek-light/30 border border-niftek-medium/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-niftek-medium flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-niftek-dark">
                      Currently, we don't have any job openings available.
                    </p>
                    <p className="text-sm text-niftek-dark/70 mt-1">
                      However, we're always interested in connecting with talented individuals. Feel free to submit your application below, and we'll keep your information on file for future opportunities.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Application Form Section */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-niftek-dark mb-6">Apply Now</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-niftek-dark mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-niftek-dark mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-niftek-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-niftek-dark mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40"
                    placeholder="555-555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-niftek-dark mb-2">
                    Resume * (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-niftek-light file:text-niftek-dark hover:file:bg-niftek-medium hover:file:text-white file:cursor-pointer"
                  />
                  {resume && (
                    <p className="mt-2 text-sm text-niftek-dark/70">
                      Selected: {resume.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-niftek-dark mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-niftek-light rounded-lg focus:outline-none focus:ring-2 focus:ring-niftek-medium focus:border-transparent text-niftek-dark placeholder:text-niftek-dark/40 resize-none"
                    placeholder="Tell us why you're interested in joining Niftek..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your application has been submitted successfully. We'll review your resume and get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    Something went wrong. Please try again later or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-niftek-medium text-white py-3 px-6 rounded-lg font-semibold hover:bg-niftek-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
