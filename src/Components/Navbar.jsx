import { useState, useEffect, useRef } from "react";
import { BiLogOut, BiSun, BiMoon, BiUserCircle, BiCog } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { chooseUserName } from "../Utils/Util";

export default function Navbar({ linkItems = [] }) {
    const [activeLink, setActiveLink] = useState(linkItems[0]?.name || null);
    const [theme, setTheme] = useState('light');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { user, logout } = useAuth();
    const isLoggedIn = !!user;

    

    // Theme handling
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    // Dropdown handling with improved outside click detection
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <header className="w-full h-20 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 px-6
            flex justify-between items-center shadow-sm font-poppins
            border-b border-neutral-200 dark:border-neutral-700 transition-colors duration-300 sticky top-0 z-50">
            
            <div className="flex items-center gap-8">
                <NavLink to="/" className="flex items-center gap-2 group">
                    <CiBank className="size-9 text-[var(--color-secondary)] transition-transform group-hover:scale-105" />
                    <span className="text-xl font-bold text-neutral-900 dark:text-white">SecureBank</span>
                </NavLink>
            </div>

            <nav className="hidden md:flex">
                <ul className="flex gap-8 items-center font-medium">
                    {linkItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className={`relative px-3 py-2 hover:text-[var(--color-primary)] 
                                    ${activeLink === item.name ? 'text-[var(--color-secondary)]' : ''}
                                    before:content-[''] before:absolute before:bottom-0 before:left-0 
                                    before:w-0 before:h-[2px] before:bg-[var(--color-secondary)] 
                                    hover:before:w-full before:transition-all before:duration-300`}
                                onClick={() => setActiveLink(item.name)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-6">
                <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (
                        <BiMoon className="size-6 text-[var(--color-primary)]" />
                    ) : (
                        <BiSun className="size-6 text-[var(--color-primary)]" />
                    )}
                </button>

                {isLoggedIn ? (
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors"
                            aria-expanded={isProfileOpen}
                        >
                            <BiUserCircle className="size-6 text-[var(--color-secondary)]" />
                            <span className="hidden sm:block font-medium">{chooseUserName(user)}</span>
                        </button>

                        <div 
                            className={`absolute right-0 mt-2 w-56 bg-white dark:bg-neutral-800 shadow-xl
                                rounded-lg border border-neutral-100 dark:border-neutral-700 py-2 z-50
                                transition-opacity duration-200 ${isProfileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            role="menu"
                        >
                            <NavLink
                                to="/profile"
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-primary)]
                                    hover:bg-[var(--color-secondary)]/30 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                            >
                                <BiUserCircle className="size-5" />
                                My Profile
                            </NavLink>
                            
                            <NavLink
                                to="/admin"
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-primary)]
                                    hover:bg-[var(--color-secondary)]/30 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                            >
                                <BiCog className="size-5 text-[var(--color-secondary)]/80" />
                                Admin Dashboard
                            </NavLink>

                            <hr className="my-2 border-[var(--color-primary)]/30" />

                            <button
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-secondary)]
                                    hover:bg-[var(--color-secondary)]/10 transition-colors"
                                onClick={() => {
                                    setIsProfileOpen(false);
                                    logout();
                                }}
                            >
                                <BiLogOut className="size-5" />
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <NavLink
                            to="/login"
                            className="px-4 py-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="px-5 py-2.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/60 text-[var(--color-primary)] rounded-lg 
                                transition-colors shadow-sm hover:shadow-md"
                        >
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    );
}