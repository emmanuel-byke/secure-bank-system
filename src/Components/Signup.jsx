import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';
import { NeonIcon } from './IconEnhancer';
import { Shield } from 'lucide-react';



const InputField = ({ label, name, type = 'text', Icon, required = false, value, error, onChange }) => (
    <div className="mb-4">
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


const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: 'O'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Enhanced validation function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters';
    }
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
        console.log(formData);
      // await signup(formData);
      // navigate('/profile');
    } catch (error) {
      setErrors(prev => ({ ...prev, general: error.message }));
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-gray-800 rounded-2xl shadow-xl px-8 pb-2">
        <div className="text-center mb-2 flex flex-row items-center justify-center ">
            <NeonIcon 
                icon={Shield}
                color='var(--color-secondary) '
            />
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-[var(--color-secondary)] font-bold bg-gradient-to-r from-[var(--color-secondary)]/30 to-transparent 
                px-4 py-2 rounded-xl">
                Secure
            </span>
            Bank</h1>
        </div>

        {errors.general && (
          <div className=" p-4 bg-red-900/30 border border-red-400 rounded-lg text-red-400">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
                label="First Name"
                name="first_name"
                Icon={FiUser}
                value={formData.first_name}
                error={errors.first_name}
                onChange={handleChange}
            />
            <InputField
                label="Last Name"
                name="last_name"
                Icon={FiUser}
                value={formData.last_name}
                error={errors.last_name}
                onChange={handleChange}
            />
          </div>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            Icon={FiMail}
            required={true}
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
                label="Password"
                name="password"
                type="password"
                Icon={FiLock}
                required={true}
                value={formData.password}
                error={errors.password}
                onChange={handleChange}
            />
            <InputField
                label="Confirm Password"
                name="confirm_password"
                type="password"
                Icon={FiLock}
                required={true}
                value={formData.confirm_password}
                error={errors.confirm_password}
                onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: 'M', label: 'Male' },
                { value: 'F', label: 'Female' },
                { value: 'O', label: 'Other' },
                { value: 'T', label: 'Trans' },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-center p-3 rounded-lg cursor-pointer transition-colors ${
                    formData.gender === option.value
                      ? 'bg-cyan-500/20 border border-cyan-400'
                      : 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={option.value}
                    checked={formData.gender === option.value}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="sr-only"
                  />
                  <span className="text-gray-300 text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-medium text-white transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <ImSpinner8 className="animate-spin h-5 w-5" />
            ) : (
              <>
                Create Account
                <FiArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </button>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;