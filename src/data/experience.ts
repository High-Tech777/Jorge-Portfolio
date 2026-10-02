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
    "description": "Enterprise AI applications, Python backend services, and predictive, generative, and agentic AI workflows.",
    "achievements": [
      "Built and maintained Python-based backend services and AI-enabled applications, supporting enterprise data pipelines and software components used across predictive, generative, and agentic AI workflows.",
      "Developed robust RESTful APIs and service integrations connecting AI applications with enterprise data sources, business workflows, knowledge graphs, and downstream services.",
      "Designed scalable software architectures for enterprise AI applications, integrating data pipelines, AI models, knowledge graphs, orchestration services, and agent-based workflows to support production-scale vertical AI solutions.",
      "Developed and integrated AI capabilities using LLMs, predictive models, generative AI, and agentic AI, supporting industry-specific applications across retail, financial services, industrial operations, and enterprise IT.",
      "Contributed to Eureka AI, SymphonyAI's foundational AI platform, supporting the development and deployment of industry-specific models, AI agents, and enterprise applications through shared data, orchestration, and governance capabilities.",
      "Developed AI-powered workflows that combined predictive intelligence, generative AI, domain knowledge, and autonomous/semi-autonomous agents to automate multi-step enterprise business processes.",
      "Led a development pod of 8 engineers, coordinating technical execution, enforcing coding standards, performing code reviews, and ensuring consistent delivery across multiple development sprints.",
      "Implemented CI/CD pipelines, automated testing, containerized deployments, and application monitoring to improve the reliability and repeatability of enterprise AI software releases.",
      "Designed, built, and maintained full-stack features across AI-enabled enterprise applications, integrating backend services, APIs, data-processing components, and user-facing workflows.",
      "Developed and enhanced backend services supporting enterprise onboarding, authentication, transaction processing, investigations, operational workflows, and AI-assisted decision-making across SymphonyAI's vertical AI applications."
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
      "Developed and maintained enterprise web applications for financial, administrative, payroll, and business-management operations, supporting corporate clients through SES's software-factory services.",
      "Built responsive business interfaces using Angular, integrating frontend components with backend services to support financial reporting, payroll processing, employee benefits, profitability calculations, and administrative workflows.",
      "Implemented backend services using ASP.NET Web API and .NET/C#, developing RESTful APIs and business logic for enterprise applications and integrating frontend systems with existing business infrastructure.",
      "Optimized database queries and application processes for financial calculations and reporting, improving application performance and supporting efficient processing of enterprise data.",
      "Developed an enterprise payroll-management system, delivering configurable functionality, secure processing, an intuitive user interface, and additional features to support evolving business requirements.",
      "Developed a digital-signature desktop application using .NET/C#, PDFium Viewer, and iTextSharp, enabling electronic document-signing workflows and integration with business document processes.",
      "Built a web-based requirements-management application for managing requests, worked hours, reports, and billing, supporting project and service-management operations.",
      "Implemented automated testing and CI/CD workflows using GitLab, while participating in code reviews, technical discussions, and software-development activities to maintain application quality, security, and reliability."
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
    "id": "teamsoft",
    "company": "TeamSoft SAC",
    "role": "Software Engineer",
    "duration": "07/2018 - 04/2020",
    "location": "Lima, Peru",
    "description": "Retail software supporting sales, inventory, promotions, customer management, and point-of-sale operations.",
    "achievements": [
      "Developed and implemented retail software solutions supporting sales, inventory management, promotions, customer management, and point-of-sale operations for enterprise retail clients.",
      "Implemented electronic invoicing functionality for Belcorp's sales system, integrating electronic billing processes into the company's retail sales operations.",
      "Enhanced the RCS Tools mobile application, providing secure, real-time access to RMS.NET data and enabling users to consult stock information and perform daily retail operations more efficiently.",
      "Released the Physical Inventory module and optimized the application's user interface, expanding RCS Tools' capabilities for retail inventory operations.",
      "Added an Employee PIN module to RCS Tools, extending the application's functionality for retail workforce operations.",
      "Supported the development and implementation of RMS/POS retail systems for Belcorp, providing functionality for sales and retail-management operations.",
      "Contributed to retail software solutions covering point of sale, inventory control, promotions, customer management, electronic invoicing, and mobile inventory operations.",
      "Worked on software solutions designed for integration with existing enterprise systems, POS platforms, e-commerce systems, and electronic-invoicing services, supporting the company's broader retail technology ecosystem."
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
