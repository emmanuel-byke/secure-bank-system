import { CreditCard, User, Settings, Lock, Mail, Bell } from "lucide-react";
import { NeonIcon } from "./IconEnhancer";
import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { combineUserNames } from "../Utils/Util";

export default function Profile() {
    const [isEdit, setIsEdit] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [theme, setTheme] = useState('light');
    const [notifications] = useState([
        "New security feature available",
        "Account statement ready",
        "System maintenance scheduled"
    ]);

    const accountDetails = [
        { number: '123-123', isActive: true, type: 'Personal', currency: 'K', balance: 50.4, users: [{ firstname: "Emmanuel", lastname: "Basikolo" }] }
    ];

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

    const getAccount = (accountNumber) => {
        return accountDetails.find(account => account.number === accountNumber);
    };

    return (
        <main className="w-full min-h-screen flex flex-col text-[var(--color-primary)] bg-[var(--color-bg)] p-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-poppins">Account Overview</h1>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors">
                        <Bell className="size-6 text-[var(--color-primary)]" />
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-border)] transition-colors"
                    >
                        {theme === 'light' ? (
                            <BiMoon className="size-6 text-[var(--color-primary)]" />
                        ) : (
                            <BiSun className="size-6 text-[var(--color-primary)]" />
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* User Profile Card */}
                <div className="bg-[var(--color-neutral)] rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                            <NeonIcon
                                icon={User}
                                size={120}
                                color="var(--color-secondary)"
                                className="z-10 relative"
                            />
                            <div className="absolute inset-0 bg-[var(--color-secondary)] blur-2xl opacity-20" />
                        </div>
                        
                        <div className="w-full space-y-4">
                            {[
                                { label: "First Name:", value: "Emmanuel" },
                                { label: "Last Name:", value: "Basikolo" },
                                { label: "Phone:", value: "0886467564" },
                                { label: "Gender:", value: "Male" }
                            ].map((field, index) => (
                                <div key={index} className="flex justify-between items-center p-2 bg-[var(--color-bg-secondary)] rounded-lg">
                                    <span className="text-sm font-medium">{field.label}</span>
                                    {isEdit ? (
                                        field.label === "Gender:" ? (
                                            <select className="bg-[var(--color-neutral)] px-2 py-1 rounded">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                defaultValue={field.value}
                                                className="bg-[var(--color-neutral)] px-2 py-1 rounded w-32"
                                            />
                                        )
                                    ) : (
                                        <span className="font-medium">{field.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsEdit(!isEdit)}
                            className="w-full py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors"
                        >
                            {isEdit ? 'Save Changes' : 'Edit Profile'}
                        </button>
                    </div>
                </div>

                {/* Account Details Card */}
                <div className="bg-[var(--color-neutral)] rounded-xl p-6 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)] opacity-10 blur-3xl" />
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Account Details</h2>
                            <select
                                onChange={(e) => setCurrentAccount(getAccount(e.target.value))}
                                className="bg-[var(--color-bg-secondary)] px-4 py-2 rounded-lg z-10"
                            >
                                <option value="all">Select Account</option>
                                {accountDetails.map((account, index) => (
                                    <option key={index} value={account.number}>{account.number}</option>
                                ))}
                            </select>
                        </div>

                        {currentAccount && (
                            <div className="space-y-4">
                                <div className="p-4 bg-[var(--color-bg-secondary)] rounded-lg">
                                    <h3 className="text-sm text-[var(--color-primary)]/70 mb-2">Account Balance</h3>
                                    <p className="text-2xl font-bold">
                                        {currentAccount.currency}{currentAccount.balance.toFixed(2)}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <DetailItem label="Account Holder" value={combineUserNames(currentAccount.users)} />
                                    <DetailItem label="Account Number" value={currentAccount.number} />
                                    <DetailItem label="Status" value={currentAccount.isActive ? "Active" : "Inactive"} />
                                    <DetailItem label="Account Type" value={currentAccount.type} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Security & Settings Card */}
                <div className="bg-[var(--color-neutral)] rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold">Security & Settings</h2>
                        
                        <div className="space-y-4">
                            <SettingsItem
                                icon={Lock}
                                title="Change Password"
                                action="Update"
                                onClick={() => console.log("Change password")}
                            />
                            <SettingsItem
                                icon={Mail}
                                title="Email Preferences"
                                action="Configure"
                                onClick={() => console.log("Email settings")}
                            />
                            <SettingsItem
                                icon={User}
                                title="User Privileges"
                                action={
                                    <select className="bg-[var(--color-bg-secondary)] px-2 py-1 rounded">
                                        {['User', 'Teller', 'Manager', 'Admin'].map((role, index) => (
                                            <option key={index} value={role}>{role}</option>
                                        ))}
                                    </select>
                                }
                            />
                        </div>

                        <div className="mt-4 p-4 bg-[var(--color-bg-secondary)] rounded-lg">
                            <h3 className="text-sm font-medium mb-2">Security Rating</h3>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-[var(--color-border)] rounded-full">
                                    <div className="w-3/4 h-full bg-[var(--color-secondary)] rounded-full" />
                                </div>
                                <span className="text-sm font-medium">Strong</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const DetailItem = ({ label, value }) => (
    <div className="p-3 bg-[var(--color-bg-secondary)] rounded-lg">
        <p className="text-sm text-[var(--color-primary)]/70">{label}</p>
        <p className="font-medium">{value}</p>
    </div>
);

const SettingsItem = ({ icon: Icon, title, action, onClick }) => (
    <div className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg hover:bg-[var(--color-border)] transition-colors">
        <div className="flex items-center gap-3">
            <Icon className="size-5 text-[var(--color-secondary)]" />
            <span className="font-medium">{title}</span>
        </div>
        {typeof action === 'string' ? (
            <button
                onClick={onClick}
                className="px-3 py-1 text-sm bg-[var(--color-secondary)] text-white rounded-md hover:bg-[var(--color-secondary-dark)] transition-colors"
            >
                {action}
            </button>
        ) : (
            action
        )}
    </div>
);