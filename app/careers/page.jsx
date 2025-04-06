import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Join our team to build beautiful and responsive user interfaces using React and Next.js.",
    },
    {
      id: 2,
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Work on our server-side architecture and API development using modern technologies.",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      type: "Full-time",
      location: "Remote",
      description: "Create stunning user experiences and interfaces for our platform.",
    },
  ];

  const benefits = [
    // {
    //   title: "Competitive Salary",
    //   description: "We offer market-competitive compensation packages.",
    //   icon: "💰",
    // },
    // {
    //   title: "Remote Work",
    //   description: "Work from anywhere in the world with our flexible remote policy.",
    //   icon: "🏠",
    // },
    // {
    //   title: "Health Benefits",
    //   description: "Comprehensive health insurance and wellness programs.",
    //   icon: "🏥",
    // },
    // {
    //   title: "Learning & Growth",
    //   description: "Continuous learning opportunities and professional development.",
    //   icon: "📚",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#248c89]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl max-w-2xl">
              Be part of a dynamic team that's revolutionizing the service industry.
              We're looking for talented individuals who are passionate about making a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Why Join Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join ESPE Service?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of service management, and we need your expertise to make it happen.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-gray-600">{job.type}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">{job.location}</span>
                    </div>
                  </div>
                  <Link href={`/careers/${job.id}`}>
                    <button className="mt-4 md:mt-0 bg-[#248c89] text-white px-6 py-2 rounded-lg hover:bg-[#1a6b68] transition-colors">
                      Apply Now
                    </button>
                  </Link>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in working together to achieve great things.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We encourage creative thinking and new ideas.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">We support your professional and personal development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 