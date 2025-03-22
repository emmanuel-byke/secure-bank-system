import { useState, useEffect } from "react";
import { BiLogOut, BiSun, BiMoon, BiUserCircle, BiCog } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

export default function Navbar({ linkItems, isLoggedIn }) {
    const [activeLink, setActiveLink] = useState(linkItems?.length > 0 ? linkItems[0].name : null);
    const [theme, setTheme] = useState('light');
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Theme handling (same as before)
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        savedTheme === 'dark'?
          document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      }, []);

      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        newTheme === 'dark'?
            document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isProfileOpen && !event.target.closest('.profile-dropdown')) {
                setIsProfileOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isProfileOpen]);

    return (
        <header className="w-full h-20 bg-[var(--color-neutral)] text-[var(--color-primary)]/70 px-6
            flex flex-row justify-between items-center shadow-2xl font-poppins
            border-b border-[var(--color-border)] transition-colors duration-300 relative ring-0">
            
            
            <div className="flex items-center gap-8">
                <a href="/" className="flex items-center gap-2 group">
                    <CiBank className="size-9 text-[var(--color-secondary)] transition-all group-hover:scale-110" />
                    <span className="text-xl font-bold text-[var(--color-primary)]">SecureBank</span>
                </a>
                {/* <div className="hidden lg:flex items-center bg-[var(--color-bg-secondary)] rounded-full px-4 py-2 w-64">
                    <FiSearch className="text-[var(--color-primary)]/50 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none w-full placeholder-[var(--color-primary)/50] text-sm"
                    />
                </div> */}
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
                    className="p-2 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {theme === 'light' ? (
                        <BiMoon className="size-6 text-[var(--color-primary)]" />
                    ) : (
                        <BiSun className="size-6 text-[var(--color-primary)]" />
                    )}
                </button>

                {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 hover:bg-[var(--color-border)] p-2 rounded-lg transition-colors"
                            >
                                <BiUserCircle className="size-6 text-[var(--color-secondary)]" />
                                <span className="hidden sm:block">John Doe</span>
                            </button>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[var(--color-neutral)] shadow-xl
                                    rounded-lg border border-[var(--color-border)] py-2 z-50">
                                    <a
                                        href="/profile"
                                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--color-bg-secondary)]"
                                    >
                                        <BiUserCircle className="size-5" />
                                        My Profile
                                    </a>
                                    <a
                                        href="/admin"
                                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg
                                        bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors"
                                    >
                                        <BiCog className="size-5 text-[var(--color-secondary)]" />
                                        <span className="text-sm">Admin Dashboard</span>
                                    </a>
                                    <hr className="my-2 border-[var(--color-border)]" />
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--color-bg-secondary)] text-red-500"
                                    >
                                        <BiLogOut className="size-5" />
                                        Logout
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-[var(--color-primary)] px-3 py-1.5">
                            Login
                        </a>
                        <a href="#" className="bg-[var(--color-secondary)] text-white px-5 py-2 rounded-full 
                            hover:bg-[var(--color-secondary-dark)] transition-colors shadow-lg">
                            Sign Up
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}