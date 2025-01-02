// Reusable form input component with optional icon
import React from 'react';

const FormInput = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      )}
      <input
        {...props}
        className={`w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
          text-white placeholder-gray-400 focus:outline-none focus:border-blue-400
          ${Icon ? 'pl-12' : ''}`}
      />
    </div>
  );
};

export default FormInput;