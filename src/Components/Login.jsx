import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLock, FiMail, FiLogIn } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';



const InputField = ({ label, name, type = 'text', Icon, required = true, value, error, onChange }) => (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-3 bg-gray-800 border ${
            error ? 'border-red-500' : 'border-gray-700'
          } rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-colors`}
          required={required}
        />
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
);

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
        console.log(formData)
      // await login(formData);
      // navigate('/dashboard');
    } catch (error) {
      setErrors(prev => ({ ...prev, general: error.message }));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 pointer-events-none" />
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue your journey</p>
        </div>

        {errors.general && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-400 rounded-lg text-red-400">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Email Address"
            name="email"
            type="email"
            Icon={FiMail}

            value={formData.email}
            error={errors.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            Icon={FiLock}
            value={formData.password}
            error={errors.password}
            onChange={handleChange}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-cyan-400 bg-gray-700 border-gray-600 rounded focus:ring-cyan-400"
              />
              <span className="text-gray-400">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-medium text-white transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-cyan-500/20"
          >
            {loading ? (
              <ImSpinner8 className="animate-spin h-5 w-5" />
            ) : (
              <>
                Log In
                <FiLogIn className="ml-2 h-5 w-5" />
              </>
            )}
          </button>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            >
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};