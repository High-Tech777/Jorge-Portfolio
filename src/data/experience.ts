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
    "location": "Palo Alto, CA, USA",
    "description": "Enterprise AI backend services, Eureka AI, generative models, agents, and production applications.",
    "achievements": [
      "Architected and maintained scalable Python backend services and AI-powered applications for enterprise solutions across retail, financial services, manufacturing, and IT.",
      "Engineered RESTful APIs and integrated enterprise data sources, knowledge graphs, and AI services to streamline business workflows.",
      "Designed scalable backend architectures using Python, LLMs, and data pipelines to support Eureka AI and industry-specific applications.",
      "Led the development of reusable services for Symphony AI's Eureka AI platform, supporting Generative AI, model orchestration, and intelligent agents.",
      "Delivered AI-powered workflows combining LLMs, predictive models, and intelligent agents to automate financial investigations, retail analytics, and industrial operations.",
      "Led a small engineering team, coordinated sprint delivery, conducted code reviews, and mentored developers to maintain high engineering standards.",
      "Improved CI/CD pipelines, automated testing, and containerized deployments to strengthen software quality, scalability, and release reliability.",
      "Oversaw full-stack development using Python, RESTful APIs, and frontend technologies for enterprise AI dashboards and intelligent copilots.",
      "Designed and optimized backend services for authentication, transaction monitoring, financial investigations, and AI-assisted decision-making."
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
    "description": "Enterprise web applications for financial, payroll, and business-management workflows.",
    "achievements": [
      "Developed and maintained enterprise web applications for financial, payroll, and business-management operations, supporting multiple corporate clients.",
      "Engineered responsive user interfaces using Angular for payroll processing, financial reporting, and employee-management systems.",
      "Implemented backend services using ASP.NET, .NET/C#, and RESTful APIs to support enterprise applications and improve system integrations.",
      "Delivered an enterprise payroll-management system using Angular, .NET, and SQL Server, enabling secure payroll processing and automated calculations.",
      "Optimized SQL queries and backend processes to reduce data-processing time and improve financial reporting performance.",
      "Created a digital-signature application using .NET/C#, PDFium Viewer, and iTextSharp to automate electronic document-signing workflows.",
      "Designed and launched a requirements-management system for tracking project requests, working hours, reports, and billing activities.",
      "Streamlined automated testing and CI/CD pipelines using GitLab to improve deployment reliability and reduce software defects."
    ],
    "technologies": [
      "Angular",
      "ASP.NET",
      ".NET/C#",
      "RESTful APIs",
      "SQL Server",
      "SQL",
      "PDFium Viewer",
      "iTextSharp",
      "GitLab",
      "CI/CD"
    ],
    "type": "Professional experience"
  },
  {
    "id": "teamsoft",
    "company": "TeamSoft SAC",
    "role": "Software Engineer",
    "duration": "07/2018 - 04/2020",
    "location": "Lima, Peru",
    "description": "Enterprise retail software for sales, inventory, promotions, customer management, and point-of-sale operations.",
    "achievements": [
      "Developed and maintained enterprise retail applications supporting 5 key operations: sales, inventory, promotions, customer management, and point-of-sale transactions.",
      "Engineered electronic invoicing functionality for Belcorp's retail sales system, integrating automated billing and transaction processing.",
      "Enhanced the RCS Tools mobile application with real-time RMS.NET integration, enabling secure stock access and efficient retail operations.",
      "Delivered the Physical Inventory module, improving inventory tracking, stock verification, and mobile usability.",
      "Implemented the Employee PIN module, strengthening employee access management and retail workforce operations.",
      "Supported RMS/POS systems for Belcorp, optimizing sales processing, inventory control, and retail-management workflows.",
      "Designed integrations connecting retail applications with enterprise systems, e-commerce platforms, and electronic invoicing services."
    ],
    "technologies": [
      "RMS.NET",
      "RMS/POS",
      "Electronic Invoicing",
      "Inventory Management"
    ],
    "type": "Professional experience"
  }
];
