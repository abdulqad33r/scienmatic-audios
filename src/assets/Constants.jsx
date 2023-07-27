// Navbar
export const LogoImage = "/images/monstercat-logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
export const Hamburger = GiHamburgerMenu;

import { FaFacebook } from "react-icons/fa";
import { SiTiktok, SiPlayerfm, SiInstagram } from "react-icons/si";
import { BsTwitter, BsTwitch, BsArrowRight, BsShare } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";
export const SocialIcons = [
  <SiInstagram />,
  <SiTiktok />,
  <BsTwitter />,
  <BsTwitch />,
  <FaFacebook />,
  <RiDiscordFill />,
  <SiPlayerfm />,
];

import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
export const Arrows = {
  up: <MdOutlineArrowDropUp />,
  down: <MdOutlineArrowDropDown />,
  right: <BsArrowRight />,
};

export const SideMenu = [
  { title: "music", submenu: ["our music", "instinct", "uncaged", "silk"] },
  { title: "artist" },
  {
    title: "about",
    submenu: [
      "about monstercat",
      "diversity & inclusion",
      "code of ethics",
      "environmental",
      "contact us",
    ],
  },
  { title: "news" },
  {
    title: "events",
    submenu: ["MONSTERCAT EVENTS EXPERIENCE", "UPCOMING EVENTS"],
  },
  {
    title: "PROGRAMMING",
    submenu: [
      "MonstercatTV",
      "CALL OF THE WILD",
      "SILK SHOWCASE",
      "UPCOMING SHOWS",
    ],
  },
  { title: "GOLD" },
  { title: "PARTNERS" },
  { title: "PRESS" },
  { title: "PLAYER" },
  { title: "SHOP" },
  { title: "LOST CIVILIZATION" },
];

// Header

export const HeaderImages = {
  jpg: "/images/cover.jpg",
  webpNormal: "/images/image.webp",
  webpHD: "/images/image (1).webp",
};

export const AudiosFiles = [
  "Aankhon Mein Teri Full Cover by Janani Sings (I don't believe in soulmates but)-cx4S342UJ4g-160k-1657423545907.mp3",
  "Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka, AishwaryaArijitPritam-6FURuLYrR_Q-160k-1655540649381.mp3",
  "Apna Bana Le - Bhediya  Varun Dhawan, Kriti Sanon Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya-ElZfdU54Cp8-160k-1654438185874.mp3",
  "Arijit Singh  Lambiyaan Si Judaiyaan With Lyrics  Raabta  Sushant Rajput, Kriti Sanon  T-Series-vc-KxBjIbgI-160k-1655540844833.mp3",
  "Arijit Singh Pachtaoge  Vicky Kaushal, Nora Fatehi Jaani, B Praak, Arvindr Khaira  Bhushan Kumar-PVxc5mIHVuQ-160k-1655605903717.mp3",
  "Channa Mereya Full Video - ADHMRanbir Kapoor, AnushkaArijit SinghPritamKaran Johar-284Ov7ysmfA-160k-1655605835634.mp3",
  "Chhod Diya (Lyrics) - Arijit Singh, Kanika Kapoor  Baazaar-KMz2pTfRIxw-160k-1657425047608.mp3",
  "Hamdard Full Video Song  Ek Villain  Arijit Singh  Mithoon-FJ55SHCzt88-160k-1657245621199.mp3",
  "Kesariya - Brahmāstra  Ranbir Kapoor  Alia Bhatt  Pritam  Arijit Singh  Amitabh Bhattacharya-BddP6PYo2gs-160k-1655540620380.mp3",
  "Khamoshiyan (Title Song) Lyrics  Arijit Singh  Rashmi S , Jeet G  Ali Fazal , Sapna P & Gurmeet C-qN88U6ZqR-4-160k-1655540765433.mp3",
  "Phir Bhi Tumko Chaahunga - Full Song  Arijit Singh  Arjun K & Shraddha K  Mithoon , Manoj M-_iktURk0X-A-160k-1657221388850.mp3",
  "Shayad - Love Aaj Kal  Kartik  Sara  Arushi  Pritam  Arijit Singh-MJyKN-8UncM-160k-1657245635899.mp3",
  "Zara Zara Behekta Hai [Cover 2018]  RHTDM  Omkar ft.Aditya Bhardwaj Full Bollywood Music Video-pdoM2FzGoog-160k-1655604243205.mp3",
];

export const BodyVideo = "https://www.youtube.com/watch?v=STpHs6Ye4NM";

import { FiPlay, FiPause } from "react-icons/fi";
export const AudioIcons = {
  share: <BsShare />,
  play: <FiPlay />,
  pause: <FiPause />,
};
