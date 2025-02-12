import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/Navbar";
import logo from '../assets/logo.png';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook , faDiscord } from '@fortawesome/free-brands-svg-icons';

const icons = [
    {icon: faEnvelope, link: '/'},
    {icon: faInstagram, link: '/'},
    {icon: faFacebook, link: '/'},
    {icon: faDiscord, link: '/'}
];

const HomePage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-[350px] h-[350px] mr-8" />
                <div className='flex flex-col gap-8'>
                    <h1 className="text-[120px] leading-[1] font-semibold tracking-wider">
                        Brown
                        <span className="block font-light">Speedcubing</span>
                    </h1>
                    <ul className="flex items-start ">
                        {icons.map((item, index) => (
                            <li key={index} className="mx-4">
                                <a 
                                    href={item.link} 
                                    className="cursor-pointer hover:text-gray-300 transition duration-200"
                                >
                                    <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default HomePage;