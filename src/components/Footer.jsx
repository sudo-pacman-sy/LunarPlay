import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faDiscord,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    href: "https://github.com/sudo-pacman-sy",
    icon: faGithub,
    label: "GitHub",
  },
  { href: "https://twitter.com", icon: faTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/in/saad-ali-006783212/",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  { href: "https://discord.com", icon: faDiscord, label: "Discord" },
  { href: "https://instagram.com", icon: faInstagram, label: "Instagram" },
];

function Footer() {
  return (
    <div className="relative h-64 w-full bg-black mt-3 flex">
      <div className="border-2 h-32 w-52 flex justify-center items-center ml-16 mt-16 rounded-xl">
        <span className="text-3xl font-bold text-[#ff003c]">LunarPlay</span>
      </div>

      <div className="text-white ml-[110px] mt-5 text-base">
        <p className="text-3xl mb-4">Socials</p>
        <div className="flex flex-col space-y-2">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-max"
            >
              <span className="relative z-10 flex items-center">
                <FontAwesomeIcon icon={icon} className="mr-2" />
                {label}
              </span>
              <span className="absolute bottom-0 left-1/2 w-full h-[1px] bg-white transform -translate-x-1/2 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-1">
        <p className="text-gray-500 text-sm">
          &copy; 2024 LunarPlay. All rights reserved.Data powered by{" "}
          <span className="underline">
            <a href="https://www.themoviedb.org/">TMDB</a>
          </span>
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <div className="w-52 -mt-8">
          <p className="bg-clip-text text-transparent text-3xl text-wrap text-center mr-12 bg-gradient-to-r from-pink-500 to-orange-500 font-shadows">
            Built with <br></br>
            <span className="text-sky-500 font-manrope font-[200]">
              <FontAwesomeIcon icon={faReact} />
              React
            </span>
            <br></br> and <br></br>Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
