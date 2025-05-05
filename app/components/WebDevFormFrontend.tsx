"use client";

import React from "react";
import Image from "next/image";

export default function WebDevFormFrontend({ formData, handleCheckboxChange }) {
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
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Front-End
      </h3>

      {/* Core Languages */}
      <div className="mb-6">
        <h4 className="text-[#00c2cb] mb-3 font-medium">1. Core Languages</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/HTML5.svg" width={48} height={48} alt="HTML" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="html"
                checked={formData.frontend.coreLanguages.html}
                onChange={() =>
                  handleCheckboxChange("frontend", "coreLanguages", "html")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="html" className="text-white text-base">
                HTML
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/CSS3.svg" width={48} height={48} alt="CSS" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="css"
                checked={formData.frontend.coreLanguages.css}
                onChange={() =>
                  handleCheckboxChange("frontend", "coreLanguages", "css")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="css" className="text-white text-base">
                CSS
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/JavaScript.svg"
                width={48}
                height={48}
                alt="JavaScript"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="javascript"
                checked={formData.frontend.coreLanguages.javascript}
                onChange={() =>
                  handleCheckboxChange(
                    "frontend",
                    "coreLanguages",
                    "javascript"
                  )
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="javascript" className="text-white text-base">
                JavaScript
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/TypeScript.svg"
                width={48}
                height={48}
                alt="TypeScript"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="typescript"
                checked={formData.frontend.coreLanguages.typescript}
                onChange={() =>
                  handleCheckboxChange(
                    "frontend",
                    "coreLanguages",
                    "typescript"
                  )
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="typescript" className="text-white text-base">
                TypeScript
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="mb-6">
        <h4 className="text-[#00c2cb] mb-3 font-medium">2. Frameworks</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/React.svg" width={48} height={48} alt="React" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="react"
                checked={formData.frontend.frameworks.react}
                onChange={() =>
                  handleCheckboxChange("frontend", "frameworks", "react")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="react" className="text-white text-base">
                React
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/AngularJS.svg"
                width={48}
                height={48}
                alt="Angular"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="angular"
                checked={formData.frontend.frameworks.angular}
                onChange={() =>
                  handleCheckboxChange("frontend", "frameworks", "angular")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="angular" className="text-white text-base">
                Angular
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Vue.js.svg" width={48} height={48} alt="Vue" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="vue"
                checked={formData.frontend.frameworks.vue}
                onChange={() =>
                  handleCheckboxChange("frontend", "frameworks", "vue")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="vue" className="text-white text-base">
                Vue
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/next.svg" width={48} height={48} alt="Next.js" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="nextjs"
                checked={formData.frontend.frameworks.nextjs}
                onChange={() =>
                  handleCheckboxChange("frontend", "frameworks", "nextjs")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="nextjs" className="text-white text-base">
                Next.js
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Svelte.svg" width={48} height={48} alt="Svelte" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="svelte"
                checked={formData.frontend.frameworks.svelte}
                onChange={() =>
                  handleCheckboxChange("frontend", "frameworks", "svelte")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="svelte" className="text-white text-base">
                Svelte
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Styling UI */}
      <div className="mb-6">
        <h4 className="text-[#00c2cb] mb-3 font-medium">3. Styling UI</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/Tailwind CSS.svg"
                width={48}
                height={48}
                alt="Tailwind CSS"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="tailwind"
                checked={formData.frontend.styling.tailwind}
                onChange={() =>
                  handleCheckboxChange("frontend", "styling", "tailwind")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="tailwind" className="text-white text-base">
                Tailwind
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/Bootstrap.svg"
                width={48}
                height={48}
                alt="Bootstrap"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="bootstrap"
                checked={formData.frontend.styling.bootstrap}
                onChange={() =>
                  handleCheckboxChange("frontend", "styling", "bootstrap")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="bootstrap" className="text-white text-base">
                Bootstrap
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/Material UI.svg"
                width={48}
                height={48}
                alt="Material UI"
              />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="materialui"
                checked={formData.frontend.styling.materialui}
                onChange={() =>
                  handleCheckboxChange("frontend", "styling", "materialui")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="materialui" className="text-white text-base">
                Material UI
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Chakra.svg" width={48} height={48} alt="Chakra UI" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="chakraui"
                checked={formData.frontend.styling.chakraui}
                onChange={() =>
                  handleCheckboxChange("frontend", "styling", "chakraui")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="chakraui" className="text-white text-base">
                Chakra UI
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* State Management */}
      <div>
        <h4 className="text-[#00c2cb] mb-3 font-medium">4. State Management</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Redux.svg" width={48} height={48} alt="Redux" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="redux"
                checked={formData.frontend.stateManagement.redux}
                onChange={() =>
                  handleCheckboxChange("frontend", "stateManagement", "redux")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="redux" className="text-white text-base">
                Redux
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/MobX.svg" width={48} height={48} alt="MobX" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="mobx"
                checked={formData.frontend.stateManagement.mobx}
                onChange={() =>
                  handleCheckboxChange("frontend", "stateManagement", "mobx")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="mobx" className="text-white text-base">
                MobX
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image src="/Recoil.svg" width={48} height={48} alt="Recoil" />
            </div>

            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="recoil"
                checked={formData.frontend.stateManagement.recoil}
                onChange={() =>
                  handleCheckboxChange("frontend", "stateManagement", "recoil")
                }
                className="accent-[#7b34dd] w-5 h-5"
              />
              <label htmlFor="recoil" className="text-white text-base">
                Recoil
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
