"use client";

import React from 'react';
import Image from 'next/image';

export default function WebDevFormDatabase({ formData, handleCheckboxChange }) {
  return (
    <div className="bg-[#0f1923]/50 p-6 rounded-lg border border-[#7b34dd]/20">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <span className="bg-gradient-to-r from-[#7b34dd] to-[#00c2cb] w-8 h-8 rounded-full flex items-center justify-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        </span>
        Database
      </h3>
      
      {/* Relational */}
      <div className="mb-6">
        <h4 className="text-[#00c2cb] mb-3 font-medium">Relational</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/MySQL.svg"
                width={48}
                height={48}
                alt="MySQL"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="mysql" 
                checked={formData.database.relational.mysql}
                onChange={() => handleCheckboxChange('database', 'relational', 'mysql')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="mysql" className="text-white text-base">MySQL</label>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/PostgresSQL.svg"
                width={48}
                height={48}
                alt="PostgreSQL"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="postgresql" 
                checked={formData.database.relational.postgresql}
                onChange={() => handleCheckboxChange('database', 'relational', 'postgresql')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="postgresql" className="text-white text-base">PostgreSQL</label>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/ServerSQL.svg"
                width={48}
                height={48}
                alt="SQL Server"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="sqlserver" 
                checked={formData.database.relational.sqlserver}
                onChange={() => handleCheckboxChange('database', 'relational', 'sqlserver')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="sqlserver" className="text-white text-base">SQL Server</label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Non-Relational */}
      <div>
        <h4 className="text-[#00c2cb] mb-3 font-medium">Non-Relational</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/MongoDB.svg"
                width={48}
                height={48}
                alt="MongoDB"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="mongodb" 
                checked={formData.database.nonRelational.mongodb}
                onChange={() => handleCheckboxChange('database', 'nonRelational', 'mongodb')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="mongodb" className="text-white text-base">MongoDB</label>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/Firebase.svg"
                width={48}
                height={48}
                alt="Firebase"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="firebase" 
                checked={formData.database.nonRelational.firebase}
                onChange={() => handleCheckboxChange('database', 'nonRelational', 'firebase')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="firebase" className="text-white text-base">Firebase</label>
            </div>
          </div>
          
          <div className="flex flex-col items-center bg-[#131e29] p-4 rounded-md border border-[#7b34dd]/20">
            {/* Logo above */}
            <div className="w-14 h-14 flex items-center justify-center mb-3">
              <Image
                src="/DynamoDB.svg"
                width={48}
                height={48}
                alt="DynamoDB"
              />
            </div>
            
            {/* Checkbox below */}
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="dynamodb" 
                checked={formData.database.nonRelational.dynamodb}
                onChange={() => handleCheckboxChange('database', 'nonRelational', 'dynamodb')}
                className="accent-[#7b34dd] w-5 h-5" 
              />
              <label htmlFor="dynamodb" className="text-white text-base">DynamoDB</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}