"use client";

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      message: ''
    });

    try {
      // This would be replaced with your actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'There was an error submitting your message. Please try again.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-[#00E2D6]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E2D6] text-white"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-[#00E2D6]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E2D6] text-white"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E2D6] text-white"
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E2D6] text-white"
            placeholder="Your company name"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message <span className="text-[#00E2D6]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[#1a2229] border border-[#3a4750] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00E2D6] text-white resize-none"
          placeholder="Tell us about your project and requirements..."
        ></textarea>
      </div>
      
      {formStatus.message && (
        <div className={`p-4 rounded-lg ${formStatus.isError ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={formStatus.isSubmitting || formStatus.isSubmitted}
          className={`w-full md:w-auto px-8 py-3 rounded-full font-medium text-center transition-colors ${
            formStatus.isSubmitting || formStatus.isSubmitted
              ? 'bg-[#00E2D6]/50 text-white cursor-not-allowed'
              : 'bg-[#00E2D6] text-[#1a2229] hover:bg-[#00E2D6]/90'
          }`}
        >
          {formStatus.isSubmitting ? 'Sending...' : formStatus.isSubmitted ? 'Sent!' : 'Send Message'}
        </button>
      </div>
    </form>
  );
} 