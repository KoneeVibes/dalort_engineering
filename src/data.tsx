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
import { CallsToActionType } from "./types/app.type";
import procurement from "./assets/procurementBg.svg";
import support from "./assets/supportServices.svg";
import supply from "./assets/supplyServices.svg";

export const navLinks = [
    {
        item: "Home",
        url: "/#"
    },
    {
        item: "About us",
        url: "/#about"
    },
    {
        item: "Services",
        url: "/#services"
    }
];

export const services = [
    {
        header: "Engineering, Procurement, Construction and Installation Services",
        body: "To utilize local expertise to deliver industry standard and world class services",
        deliverables: [
            "Project Management & Administration", "Installation Engineering", "Studies and Conceptual Designs", "Front End Engineering & Designs (FEED)", "Detailed Engineering & Design (DED)", "Procurement", "Construction & Installation", "Power Plant & Power System Engineering",
            "PLC, SCADA, DCS, RTU & HMI System Services", "Metering Skids, Prover Loop & L.A.C.T unit Design, Construction & Installation", "Instrument Calibration & Valves Services"
        ],
        icon: engineeringServices,
        bg: procurement
    },
    {
        header: "Technical Engineering Support Services",
        body: "3D Laser Scanning, As-Built Documentation, Civil & Road Construction",
        deliverables: [
            "Asset Integrity Management", "Provision of Marine Vessels", "Manpower Supply", "Access Control, CCTV Video Surveillance & Remote Wireless Networking solution", "Well head remote asset monitoring & wireless solution", "Fire & Gas Detection and PAGA solutions", "Automated Tank Gauging systems and Depot Automation"
        ],
        icon: projectManagement,
        bg: support
    },
    {
        header: "Technical Manpower Supply Services",
        body: "Dalorts Engineering  model provide structures that enable smooth operations and allow client’s focus on core competencies",
        legend: "We provide accurate, timely and transparent payroll management service that reduces operating costs and risks without compromising in service delivery to clients across industries. We relieve you of the burden associated with managing your employees from point of entry to exit and ensuring resources are directed to core business activities. Our services centred on expertise, integrity and accountability. Our outsourcing range covers: ",
        deliverables: [
            "Mechanical Engineers, Process Engineers, Instrumentation and Electrical Engineers, Civil Engineers, Project Engineers, Technicians, Construction Personnel etc."
        ],
        icon: technicalManpower,
        bg: supply
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
};

export const callsToAction: CallsToActionType = [
    {
        buttonText: "Learn More",
        isHeaderButton: "true",
        location: "left",
    },
    {
        buttonText: "Schedule Call",
        isHeaderButton: "true",
        location: "right",
    }
];
