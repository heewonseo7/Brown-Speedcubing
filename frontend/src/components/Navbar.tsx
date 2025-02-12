import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleInfo, faHandshakeAngle, faComment } from '@fortawesome/free-solid-svg-icons';

{/* add paths for the links */}
const navItems = [
    { name: 'Home', link: '/', icon: faHome },
    { name: 'About', link: '/', icon: faCircleInfo },
    { name: 'E-Board', link: '/', icon: faHandshakeAngle },
    { name: 'Get Involved', link: '/', icon: faComment }
];

{/*make this navbar responsive and into hamburger menu */}
const Navbar = () => {
    return (
        <nav className="fixed bottom-0 h-20 w-full bg-[#1A1A1A] flex items-center justify-center border-t-1 border-[#3b3b3b]">
            {/* add box shadow to top of navbar */}
            <ul className="flex items-center">
                {navItems.map((item) => (
                    <li key={item.name} className="mx-10">
                        <a 
                            href={item.link} 
                            className="uppercase text-white flex flex-col items-center cursor-pointer hover:text-gray-300 transition duration-200"
                        >
                            <FontAwesomeIcon icon={item.icon} className="text-sm" />
                            <p className="text-[10px] mt-1">{item.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
