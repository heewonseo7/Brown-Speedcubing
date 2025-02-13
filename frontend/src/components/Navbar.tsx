import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faCircleInfo, faHandshakeAngle, faComment } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { name: 'Home', link: '/', icon: faHome },
    { name: 'About', link: '/', icon: faCircleInfo },
    { name: 'E-Board', link: '/', icon: faHandshakeAngle },
    { name: 'Get Involved', link: '/', icon: faComment }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Navbar - Top Bar */}
            <div className="md:hidden fixed top-0 left-0 w-full bg-[#1A1A1A] p-4 flex justify-between items-center z-50">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Slide-In Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-[60%] h-screen bg-[#302e2e] shadow-lg flex flex-col items-start justify-start p-6 transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-100"}`}>
                <ul className="w-full">
                    {navItems.map((item) => (
                        <li key={item.name} className="mb-6">
                            <a 
                                href={item.link} 
                                className="text-white text-lg flex items-center space-x-3 hover:text-gray-300 transition duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop Navbar (Bottom) */}
            <nav className="fixed bottom-0 h-20 w-full bg-[#1A1A1A] flex items-center justify-center border-t border-[#3b3b3b] shadow-lg md:flex hidden">
                <ul className="flex items-center">
                    {navItems.map((item) => (
                        <li key={item.name} className="mx-14">
                            <a 
                                href={item.link} 
                                className="uppercase text-white flex flex-col items-center cursor-pointer hover:text-gray-300 transition duration-200"
                            >
                                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                                <p className="text-[10px] mt-1.5">{item.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
