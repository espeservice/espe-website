'use client';

import React, { useState } from 'react';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-[#248c89]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Share Your Feedback</h1>
            <p className="text-xl">Help us improve by sharing your experience with ESPE Service.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">How was your experience?</h2>
          
          {/* Rating Section */}
          <div className="mb-8">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  <svg
                    className={`w-12 h-12 ${
                      star <= (hover || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-4">
              {rating === 0
                ? 'Select a rating'
                : rating === 1
                ? 'Poor'
                : rating === 2
                ? 'Fair'
                : rating === 3
                ? 'Good'
                : rating === 4
                ? 'Very Good'
                : 'Excellent'}
            </p>
          </div>

          {/* Feedback Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <select
                id="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#248c89] focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="cleaning">Cleaning</option>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#248c89] focus:border-transparent"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700 mb-1">
                Suggestions for Improvement
              </label>
              <textarea
                id="suggestions"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#248c89] focus:border-transparent"
                placeholder="How can we improve our service?"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                id="anonymous"
                type="checkbox"
                className="h-4 w-4 text-[#248c89] focus:ring-[#248c89] border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                Submit anonymously
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#248c89] text-white py-3 px-6 rounded-lg hover:bg-[#1a6b68] transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Thank you for helping us improve our services. Your feedback is valuable to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage; 