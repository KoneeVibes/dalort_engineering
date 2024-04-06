import engineeringServices from "./assets/engineeringServices.svg";
import projectManagement from "./assets/projectManagement.svg";
import technicalManpower from "./assets/technicalManpower.svg";
import castlepine from "./assets/carouselBg.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import plant from "./assets/plant.svg";
import engineer from "./assets/engineer.svg";
import tower from "./assets/tower.svg";

export const navLinks = [
    {
        item: "Home",
        url: "#"
    },
    {
        item: "About us",
        url: "#about"
    },
    {
        item: "Services",
        url: "#services"
    }
];

export const services = [
    {
        header: "Engineering, Procurement, Construction and Installation Services",
        body: "To utilize local expertise to deliver industry standard and world class services",
        icon: engineeringServices,
    },
    {
        header: "Technical Engineering Support Services",
        body: "3D Laser Scanning, As-Built Documentation, Civil & Road Construction",
        icon: projectManagement,
    },
    {
        header: "Technical Manpower Supply Services",
        body: "Dalorts Engineering  model provide structures that enable smooth operations and allow client’s focus on core competencies",
        icon: technicalManpower,
    }
];

export const testimonials = [
    {
        bg: castlepine,
        message: ' “Working with Darlots has been an incredibly painless and enjoyable experience.” '
    },
    {
        bg: castlepine,
        message: ' “Working with Darlots has been an incredibly painless and enjoyable experience.” '
    }
];

export const qanda = [
    {
        q: "What is your Quality Policy?",
        a: "We work with top manufacturers and suppliers to ensure that customers get the best value for their money while ensuring continual improvement of quality."
    },
    {
        q: "What is your Corporate Social Responsiblility?",
        a: "We have a strong corporate HSE culture and strive to make a positive impact in the communities where it operates."
    },
    {
        q: "How do you support local communities where you operate in?",
        a: "We always strive to have a strong positive impact in the communities we operate in."
    },
    {
        q: "How do you invest in research and development to improve your operations?",
        a: "We work with clients from project conception, offering world class solutions, researching and gathering insights across the value chain."
    },
];

export const smIcons = [
    <LinkedInIcon />, <XIcon />, <InstagramIcon />
];

export const professionals = [
    {
        thumbnail: plant,
        height: 622
    },
    {
        thumbnail: engineer,
        height: 497
    },
    {
        thumbnail: tower,
        height: 622
    }
];

export const contactDetails = {
    "Phone: ": "08072447626",
    "Email: ": "info@dalortsengineering.com",
    "Office Address: ": " Palace Road, Oniru, Lagos."
}