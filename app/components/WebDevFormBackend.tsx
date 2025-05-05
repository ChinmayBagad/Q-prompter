"use client";

import React from "react";
import Image from "next/image";

export default function WebDevFormBackend({ formData, handleCheckboxChange }) {
  return (
    <div className="bg-[#0f1923]/50 p-6 rounded-lg border border-[#7b34dd]/20">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <span className="bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] w-8 h-8 rounded-full flex items-center justify-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Back-End
      </h3>

      {/* Languages */}
      <div className="mb-6">
        <h4 className="text-[#00c2cb] mb-3 font-medium">1. Languages</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Node.js.svg" width={48} height={48} alt="Node.js" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="nodejs"
                checked={formData.backend.languages.nodejs}
                onChange={() =>
                  handleCheckboxChange("backend", "languages", "nodejs")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="nodejs" className="text-white text-base">
                Node.js
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Python.svg" width={48} height={48} alt="Python" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="python"
                checked={formData.backend.languages.python}
                onChange={() =>
                  handleCheckboxChange("backend", "languages", "python")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="python" className="text-white text-base">
                Python
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Java.svg" width={48} height={48} alt="Java" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="java"
                checked={formData.backend.languages.java}
                onChange={() =>
                  handleCheckboxChange("backend", "languages", "java")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="java" className="text-white text-base">
                Java
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/CSharp.svg" width={48} height={48} alt="C#" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="csharp"
                checked={formData.backend.languages.csharp}
                onChange={() =>
                  handleCheckboxChange("backend", "languages", "csharp")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="csharp" className="text-white text-base">
                C#
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/GO.svg" width={48} height={48} alt="Go" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="go"
                checked={formData.backend.languages.go}
                onChange={() =>
                  handleCheckboxChange("backend", "languages", "go")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="go" className="text-white text-base">
                Go
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h4 className="text-[#00c2cb] mb-3 font-medium">2. Frameworks</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/Express.svg"
                width={48}
                height={48}
                alt="Express.js"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="express"
                checked={formData.backend.frameworks.express}
                onChange={() =>
                  handleCheckboxChange("backend", "frameworks", "express")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="express" className="text-white text-base">
                Express.js
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Django.svg" width={48} height={48} alt="Django" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="django"
                checked={formData.backend.frameworks.django}
                onChange={() =>
                  handleCheckboxChange("backend", "frameworks", "django")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="django" className="text-white text-base">
                Django
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Flask.svg" width={48} height={48} alt="Flask" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="flask"
                checked={formData.backend.frameworks.flask}
                onChange={() =>
                  handleCheckboxChange("backend", "frameworks", "flask")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="flask" className="text-white text-base">
                Flask
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Spring.svg" width={48} height={48} alt="Spring" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="spring"
                checked={formData.backend.frameworks.spring}
                onChange={() =>
                  handleCheckboxChange("backend", "frameworks", "spring")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="spring" className="text-white text-base">
                Spring
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/NET.svg" width={48} height={48} alt="ASP.NET" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="aspnet"
                checked={formData.backend.frameworks.aspnet}
                onChange={() =>
                  handleCheckboxChange("backend", "frameworks", "aspnet")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="aspnet" className="text-white text-base">
                ASP.NET
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
