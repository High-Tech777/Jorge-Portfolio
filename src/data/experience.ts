export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    "id": "symphony-ai",
    "company": "Symphony AI",
    "role": "Senior AI Software Developer",
    "duration": "03/2023 - 05/2026",
    "location": "Palo Alto, USA",
    "description": "Enterprise AI applications, Python backend services, and predictive, generative, and agentic AI workflows.",
    "achievements": [
      "Built and maintained Python backend services and AI-enabled applications supporting enterprise data pipelines.",
      "Developed RESTful APIs connecting AI applications with enterprise data sources, knowledge graphs, and business workflows.",
      "Designed scalable architectures integrating data pipelines, AI models, orchestration services, and agent-based workflows.",
      "Contributed to Eureka AI, supporting industry-specific models, AI agents, and enterprise applications.",
      "Built AI-powered workflows combining predictive intelligence, generative AI, domain knowledge, and autonomous or semi-autonomous agents.",
      "Led a development pod of 8 engineers, coordinated technical execution, enforced coding standards, and performed code reviews.",
      "Implemented CI/CD pipelines, automated testing, containerized deployments, and application monitoring.",
      "Delivered full-stack features and backend services for onboarding, authentication, transaction processing, investigations, and AI-assisted decisions."
    ],
    "technologies": [
      "Python",
      "RESTful APIs",
      "LLMs",
      "Generative AI",
      "Agent Workflows",
      "CI/CD",
      "Docker"
    ],
    "type": "Professional experience"
  },
  {
    "id": "ses",
    "company": "Software Enterprise Services (SES)",
    "role": "Software Developer",
    "duration": "07/2020 - 02/2023",
    "location": "Lima, Peru",
    "description": "Enterprise applications for financial, administrative, payroll, and business-management operations.",
    "achievements": [
      "Built responsive Angular interfaces for financial reporting, payroll, employee benefits, and administrative workflows.",
      "Developed ASP.NET Web API and .NET/C# backend services, RESTful APIs, and enterprise business logic.",
      "Optimized database queries and application processes for financial calculations and reporting.",
      "Developed a configurable enterprise payroll-management system with secure processing and an intuitive user interface.",
      "Built a digital-signature desktop application using .NET/C#, PDFium Viewer, and iTextSharp.",
      "Developed a requirements-management web application for requests, worked hours, reports, and billing.",
      "Implemented automated testing and CI/CD workflows using GitLab and participated in code reviews."
    ],
    "technologies": [
      "Angular",
      "ASP.NET Web API",
      ".NET",
      "C#",
      "PDFium Viewer",
      "iTextSharp",
      "GitLab"
    ],
    "type": "Professional experience"
  },
  {
    "id": "rcs",
    "company": "Retail Custom Solutions",
    "role": "Software Engineer",
    "duration": "07/2018 - 04/2020",
    "location": "Lima, Peru",
    "description": "Retail software supporting sales, inventory, promotions, customer management, and point-of-sale operations.",
    "achievements": [
      "Implemented electronic invoicing for Belcorp’s sales system and supported RMS/POS retail systems.",
      "Enhanced RCS Tools with secure, real-time RMS.NET data access and stock information.",
      "Released the Physical Inventory module and improved the RCS Tools user interface.",
      "Added an Employee PIN module for retail workforce operations.",
      "Contributed to retail solutions spanning POS, inventory control, promotions, and customer management.",
      "Supported integration with enterprise systems, POS platforms, e-commerce systems, and electronic-invoicing services."
    ],
    "technologies": [
      "RMS.NET",
      "POS Systems",
      "Electronic Invoicing",
      "Inventory Management"
    ],
    "type": "Professional experience"
  }
];
