export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "desktop" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    "id": "enterprise-ai",
    "title": "Enterprise AI & Agent Workflows",
    "description": "Enterprise AI services and applications at Symphony AI.",
    "longDescription": "Contributed to Eureka AI and industry-specific applications combining predictive intelligence, generative AI, knowledge graphs, and orchestration.",
    "technologies": [
      "Python",
      "RESTful APIs",
      "LLMs",
      "Generative AI",
      "Agent Workflows",
      "CI/CD",
      "Docker"
    ],
    "features": [
      "Enterprise data pipelines",
      "AI service integrations",
      "Knowledge graph integration",
      "Multi-step agent workflows",
      "Automated testing and CI/CD"
    ],
    "image": "/images/jorge/enterprise-ai.svg",
    "category": "ai"
  },
  {
    "id": "payroll",
    "title": "Enterprise Payroll Management",
    "description": "Configurable payroll software developed at SES.",
    "longDescription": "Developed a payroll-management system supporting secure processing, employee benefits, financial reporting, and evolving business requirements.",
    "technologies": [
      "Angular",
      ".NET/C#",
      "ASP.NET Web API"
    ],
    "features": [
      "Configurable payroll functionality",
      "Secure processing",
      "Employee benefits",
      "Financial reporting"
    ],
    "image": "/images/jorge/payroll.svg",
    "category": "web"
  },
  {
    "id": "digital-signature",
    "title": "Digital Signature Application",
    "description": "Desktop document-signing workflows developed at SES.",
    "longDescription": "Built a .NET/C# desktop application using PDFium Viewer and iTextSharp to support electronic document signing and business document processes.",
    "technologies": [
      ".NET/C#",
      "PDFium Viewer",
      "iTextSharp"
    ],
    "features": [
      "PDF viewing",
      "Electronic document signing",
      "Business document integration"
    ],
    "image": "/images/jorge/digital-signature.svg",
    "category": "desktop"
  },
  {
    "id": "requirements",
    "title": "Requirements & Service Management",
    "description": "Requests, hours, reports, and billing in one web application.",
    "longDescription": "Developed a requirements-management application supporting project and service-management operations at SES.",
    "technologies": [
      "Angular",
      ".NET/C#",
      "RESTful APIs"
    ],
    "features": [
      "Request management",
      "Worked-hours tracking",
      "Reporting",
      "Billing"
    ],
    "image": "/images/jorge/requirements.svg",
    "category": "web"
  },
  {
    "id": "rcs-tools",
    "title": "RCS Tools & Physical Inventory",
    "description": "Mobile retail tools with real-time RMS.NET data access.",
    "longDescription": "Enhanced RCS Tools, released the Physical Inventory module, improved its interface, and added an Employee PIN module.",
    "technologies": [
      "RMS.NET",
      "Inventory Management"
    ],
    "features": [
      "Real-time stock information",
      "Physical inventory",
      "Employee PIN module"
    ],
    "image": "/images/jorge/rcs-tools.svg",
    "category": "mobile"
  },
  {
    "id": "retail-pos",
    "title": "Retail POS & Electronic Invoicing",
    "description": "Retail sales and electronic billing for Belcorp.",
    "longDescription": "Supported RMS/POS systems and implemented electronic invoicing for Belcorp’s retail sales operations.",
    "technologies": [
      "RMS/POS",
      "Electronic Invoicing"
    ],
    "features": [
      "Sales operations",
      "Electronic billing",
      "Inventory control",
      "Enterprise integration"
    ],
    "image": "/images/jorge/retail-pos.svg",
    "category": "web"
  }
];
