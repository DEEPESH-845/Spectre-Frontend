// Password input component with show/hide toggle
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
          text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
      >
        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default PasswordInput;