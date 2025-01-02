// Main registration form component
import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import FormInput from '../components/form/FormInput';
import PasswordInput from '../components/form/PasswordInput';

const RegistrationForm = () => {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md px-4 md:px-0">
      {/* Form Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Create new account.</h2>
      <p className="text-gray-400 mb-6 text-sm md:text-base">
        Already have an account?{' '}
        <a href="#" className="text-blue-400 hover:text-blue-300">
          Log in.
        </a>
      </p>

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      {/* Contact Fields */}
      <FormInput
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        icon={Phone}
      />
      <FormInput
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        icon={Mail}
      />

      {/* Password Field */}
      <PasswordInput
        value={formData.password}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold 
          py-3 px-4 rounded-lg transition-colors text-sm md:text-base"
      >
        Sign up
      </button>
    </form>
  );
};

export default RegistrationForm;
