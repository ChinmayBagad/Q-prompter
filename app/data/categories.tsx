import React from "react";
import Image from "next/image";

export const categories = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Create advanced prompts for web applications, responsive design, and full-stack development with AWS services integration.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
    ),
    active: true,
  },
  {
    id: 2,
    name: "iOS Development",
    description:
      "Generate detailed prompts for iOS applications, Swift programming, and integration with AWS mobile services.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/ios-svgrepo-com.svg"
          width={40}
          height={40}
          alt="iOS Icon"
          className="text-white"
        />
      </div>
    ),
    active: true,
  },
  {
    id: 3,
    name: "Android Development",
    description:
      "Create prompts for Android app development, Kotlin programming, and AWS Amplify integration for mobile backends.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/android-svgrepo-com.svg"
          width={40}
          height={40}
          alt="Android Icon"
          className="text-white"
        />
      </div>
    ),
    active: true,
  },
  {
    id: 4,
    name: "Cloud Architecture",
    description:
      "Coming soon: Generate infrastructure as code and cloud architecture diagrams with AWS best practices.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      </div>
    ),
    active: false,
  },
  {
    id: 5,
    name: "Machine Learning",
    description:
      "Coming soon: Create prompts for ML model development, training, and deployment on AWS SageMaker.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/ai-svgrepo-com.svg"
          width={40}
          height={40}
          alt="AI Icon"
          className="text-white"
        />
      </div>
    ),
    active: false,
  },
  {
    id: 6,
    name: "DevOps",
    description:
      "Coming soon: Generate CI/CD pipeline configurations and automation scripts for AWS DevOps practices.",
    icon: (
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/dev-ops-solid-svgrepo-com.svg"
          width={40}
          height={40}
          alt="DevOps Icon"
          className="text-white"
        />
      </div>
    ),
    active: false,
  },
];