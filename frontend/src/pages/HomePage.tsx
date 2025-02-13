import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";

const icons = [
    { icon: faEnvelope, link: "/" },
    { icon: faInstagram, link: "/" },
    { icon: faFacebook, link: "/" },
    { icon: faDiscord, link: "/" },
];

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        <img src={logo} alt="logo" className="w-40 h-40 sm:w-60 sm:h-60 md:w-[350px] md:h-[350px] mb-6 md:mr-8" />
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-[100px] lg:text-[120px] leading-tight font-semibold tracking-wider">
            Brown
            <span className="block font-light">Speedcubing</span>
            </h1>
            <ul className="flex gap-4">
            {icons.map((item, index) => (
                <li key={index}>
                <a
                    href={item.link}
                    className="cursor-pointer hover:text-gray-300 transition duration-200"
                >
                    <FontAwesomeIcon icon={item.icon} className="text-2xl sm:text-3xl" />
                </a>
                </li>
            ))}
            </ul>
        </div>
        <Navbar />
        </div>
    );
};

export default HomePage;
