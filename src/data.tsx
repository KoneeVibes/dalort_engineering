import { Construction, DocumentRegistration, ElectricalServices, Integrity, SupplyServices, TechnicalManpower } from "./assets";
import engineeringServices from "./assets/engineeringServices.svg";
import projectManagement from "./assets/projectManagement.svg";
import technicalManpower from "./assets/technicalManpower.svg";

export const navLinks = [
    {
        item: "About us",
        url: "#"
    },
    {
        item: "Service",
        url: "#"
    },
    {
        item: "FAQ",
        url: "#"
    }
];

export const services = [
    {
        header: "Engineering services",
        body: "To utilize local expertise to deliver industry standard and world class services",
        icon: engineeringServices,
    },
    {
        header: "Project management",
        body: "To utilize local expertise to deliver industry standard and world class services",
        icon: projectManagement,
    },
    {
        header: "Technical manpower",
        body: "To utilize local expertise to deliver industry standard and world class services",
        icon: technicalManpower,
    }
];

export const serviceDeliverables = [
    {
        title: "Engineering",
        deliverables: [
            "Conceptual Engineering for Upstream and Downstream Oil and Gas",
            "FEED & Detailed Engineering Design for Upstream and Downstream",
            "Brownfield Engineering for Upstream and Downstream",
            "Engineering Simulation (Process/Electrical/Mechanical/Structural)",
            "As-Built Drawing"
        ]
    },
    {
        title: "Consulting",
        deliverables: [
            "Project Management",
            "Project Quality Management",
            "Technical Manpower Services",
            "Training and Human Capacity Development",
        ]
    },
];

export const benefits = [
    {
        title: "Construction Management",
        icon: <Construction />
    },
    {
        title: "Integrity",
        icon: <Integrity />
    },
    {
        title: "Electrical Services",
        icon: <ElectricalServices />
    },
    {
        title: "Document registration",
        icon: <DocumentRegistration />
    },
    {
        title: "Supply services",
        icon: <SupplyServices />
    },
    {
        title: "Technical Manpower",
        icon: <TechnicalManpower />
    }
]