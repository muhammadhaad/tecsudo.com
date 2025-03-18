export interface Project {
    id: string;
    title: string;
    description: string;
    features: string[];
    slug: string;
    fullDescription?: string;
    technologies?: string[];
    clientName?: string;
    clientIndustry?: string;
    projectDuration?: string;
    projectYear?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    testimonial?: {
        quote: string;
        author: string;
        position: string;
    };
    images?: {
        thumbnail: string;
        gallery: string[];
    };
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        slug: "e-commerce-platform",
        description: "A full-featured e-commerce solution with integrated payment processing and inventory management.",
        features: [
            "Responsive design for all devices",
            "Secure payment processing",
            "Real-time inventory tracking",
            "Customer account management"
        ],
        fullDescription: "We developed a comprehensive e-commerce platform that allows businesses to showcase their products, manage inventory, and process payments securely. The solution includes advanced features like real-time inventory tracking, customer account management, and detailed analytics.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
        clientName: "RetailTech Solutions",
        clientIndustry: "Retail Technology",
        projectDuration: "4 months",
        projectYear: "2023",
        challenge: "The client needed a scalable e-commerce solution that could handle high traffic volumes while maintaining fast loading times and providing a seamless shopping experience across all devices.",
        solution: "We built a custom e-commerce platform using React for the frontend and Node.js for the backend. We implemented a responsive design approach to ensure optimal user experience on all devices. The platform integrates with Stripe for secure payment processing and uses MongoDB for efficient data storage and retrieval.",
        results: [
            "40% increase in conversion rate",
            "60% reduction in page load time",
            "25% increase in average order value",
            "Seamless integration with existing inventory systems"
        ],
        testimonial: {
            quote: "The e-commerce platform developed by TecSudo has transformed our online business. The intuitive interface and robust backend have significantly improved our operational efficiency.",
            author: "Sarah Johnson",
            position: "CTO, RetailTech Solutions"
        },
        images: {
            thumbnail: "/images/projects/ecommerce-thumbnail.jpg",
            gallery: [
                "/images/projects/ecommerce-1.jpg",
                "/images/projects/ecommerce-2.jpg",
                "/images/projects/ecommerce-3.jpg"
            ]
        }
    },
    {
        id: "2",
        title: "Healthcare Management System",
        slug: "healthcare-management-system",
        description: "A comprehensive healthcare management solution for clinics and small hospitals.",
        features: [
            "Patient records management",
            "Appointment scheduling",
            "Billing and insurance processing",
            "Medical inventory tracking"
        ],
        fullDescription: "We created a healthcare management system that streamlines administrative tasks for medical facilities. The system includes modules for patient management, appointment scheduling, billing, and inventory control, all designed with security and HIPAA compliance in mind.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Docker", "Azure"],
        clientName: "MediCare Solutions",
        clientIndustry: "Healthcare",
        projectDuration: "6 months",
        projectYear: "2022",
        challenge: "The client needed to replace their legacy systems with a modern, integrated solution that would improve efficiency while ensuring patient data security and regulatory compliance.",
        solution: "We developed a comprehensive healthcare management system using Angular and Spring Boot. The system features role-based access control, encrypted data storage, and automated backups. We implemented a modular architecture to allow for future expansion and customization.",
        results: [
            "50% reduction in administrative time",
            "Improved patient data security",
            "30% faster appointment scheduling",
            "Seamless integration with insurance providers"
        ],
        testimonial: {
            quote: "The healthcare management system has revolutionized our operations. Our staff can now focus more on patient care rather than paperwork.",
            author: "Dr. Michael Chen",
            position: "Medical Director, MediCare Solutions"
        },
        images: {
            thumbnail: "/images/projects/healthcare-thumbnail.jpg",
            gallery: [
                "/images/projects/healthcare-1.jpg",
                "/images/projects/healthcare-2.jpg",
                "/images/projects/healthcare-3.jpg"
            ]
        }
    },
    {
        id: "3",
        title: "Financial Analytics Dashboard",
        slug: "financial-analytics-dashboard",
        description: "An interactive dashboard for financial data visualization and analysis.",
        features: [
            "Real-time data visualization",
            "Customizable reports and charts",
            "Predictive analytics",
            "Secure data integration"
        ],
        fullDescription: "We built a sophisticated financial analytics dashboard that transforms complex financial data into actionable insights. The dashboard provides real-time visualization of key performance indicators, customizable reports, and predictive analytics capabilities.",
        technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL", "AWS"],
        clientName: "FinVision Analytics",
        clientIndustry: "Financial Services",
        projectDuration: "5 months",
        projectYear: "2023",
        challenge: "The client needed a way to visualize and analyze large volumes of financial data from multiple sources to identify trends and make data-driven decisions.",
        solution: "We developed an interactive dashboard using Vue.js for the frontend and Python for data processing. We implemented advanced data visualization techniques and integrated machine learning algorithms for predictive analytics. The solution includes secure API connections to various financial data sources.",
        results: [
            "85% reduction in report generation time",
            "Improved accuracy in financial forecasting",
            "Consolidated view of data from 12 different sources",
            "Enabled real-time decision making"
        ],
        testimonial: {
            quote: "The financial analytics dashboard has transformed how we analyze and present data to our clients. The intuitive interface and powerful analytics capabilities have exceeded our expectations.",
            author: "James Wilson",
            position: "CEO, FinVision Analytics"
        },
        images: {
            thumbnail: "/images/projects/finance-thumbnail.jpg",
            gallery: [
                "/images/projects/finance-1.jpg",
                "/images/projects/finance-2.jpg",
                "/images/projects/finance-3.jpg"
            ]
        }
    }
];