"use client";

import React, { useState } from 'react';
import WebDevFormBasic from './WebDevFormBasic';
import WebDevFormFrontend from './WebDevFormFrontend';
import WebDevFormBackend from './WebDevFormBackend';
import WebDevFormDatabase from './WebDevFormDatabase';

export default function WebDevForm() {
  const [formData, setFormData] = useState({
    projectDescription: '',
    preferredStyle: '',
    frontend: {
      coreLanguages: {
        html: false,
        css: false,
        javascript: false,
        typescript: false
      },
      frameworks: {
        react: false,
        angular: false,
        vue: false,
        nextjs: false,
        svelte: false
      },
      styling: {
        tailwind: false,
        bootstrap: false,
        materialui: false,
        chakraui: false
      },
      stateManagement: {
        redux: false,
        mobx: false,
        recoil: false
      }
    },
    backend: {
      languages: {
        nodejs: false,
        python: false,
        java: false,
        csharp: false,
        go: false
      },
      frameworks: {
        express: false,
        django: false,
        flask: false,
        spring: false,
        aspnet: false
      }
    },
    database: {
      relational: {
        mysql: false,
        postgresql: false,
        sqlserver: false
      },
      nonRelational: {
        mongodb: false,
        firebase: false,
        dynamodb: false
      }
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (category, subcategory, option) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [subcategory]: {
          ...formData[category][subcategory],
          [option]: !formData[category][subcategory][option]
        }
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <WebDevFormBasic 
        formData={formData} 
        handleInputChange={handleInputChange} 
      />
      <WebDevFormFrontend 
        formData={formData} 
        handleCheckboxChange={handleCheckboxChange} 
      />
      <WebDevFormBackend 
        formData={formData} 
        handleCheckboxChange={handleCheckboxChange} 
      />
      <WebDevFormDatabase 
        formData={formData} 
        handleCheckboxChange={handleCheckboxChange} 
      />
      
      <div className="bg-[#0f1923]/50 p-6 rounded-lg border border-[#7b34dd]/20">
        <button type="submit" className="aws-button w-full py-3 px-4 rounded-md font-medium text-white text-lg">
          Generate Prompt
        </button>
      </div>
    </form>
  );
}