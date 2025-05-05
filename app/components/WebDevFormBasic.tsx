"use client";

import React from 'react';

export default function WebDevFormBasic({ formData, handleInputChange }) {
  return (
    <div className="bg-[#0f1923]/50 p-6 rounded-lg border border-[#7b34dd]/20">
      <h2 className="text-2xl font-semibold text-white mb-4">Generate Prompt</h2>
      <p className="text-gray-300 mb-6">Complete the form below to generate a detailed prompt for your web development project.</p>
      
      <div className="space-y-6">
        {/* What do you want to create */}
        <div>
          <label className="block text-gray-300 mb-2">What do you want to create?</label>
          <textarea 
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="w-full bg-[#131e29] border border-[#7b34dd]/30 rounded-md p-3 text-white focus:border-[#00c2cb] focus:ring focus:ring-[#7b34dd]/20 focus:outline-none min-h-[100px]"
            placeholder="Describe your project in detail..."
          ></textarea>
        </div>
        
        {/* Preferred Style */}
        <div>
          <label className="block text-gray-300 mb-2">Preferred Style</label>
          <textarea 
            name="preferredStyle"
            value={formData.preferredStyle}
            onChange={handleInputChange}
            className="w-full bg-[#131e29] border border-[#7b34dd]/30 rounded-md p-3 text-white focus:border-[#00c2cb] focus:ring focus:ring-[#7b34dd]/20 focus:outline-none min-h-[100px]"
            placeholder="Describe your preferred design style, UI/UX preferences..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}