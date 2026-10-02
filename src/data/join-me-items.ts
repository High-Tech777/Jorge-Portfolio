export interface Requirement {
  name: string;
  items: string[];
}

export interface JoinMeItem {
  title: string;
  overview: string;
  requirements: Requirement[];
  image: string;
  delivers?: string[];
}

export const joinMeItems: JoinMeItem[] = [
  {
    "title": "Full Stack & Enterprise AI Collaboration",
    "overview": "I build enterprise applications and AI-enabled solutions across AI, financial services, and retail. Contact me to discuss a software engineering role or project.",
    "requirements": [
      {
        "name": "Areas of Experience",
        "items": [
          "Python backend services and RESTful APIs",
          "LLMs, generative AI, knowledge graphs, and agent workflows",
          "Angular, .NET/C#, and ASP.NET enterprise applications",
          "Payroll, digital signatures, retail POS, and inventory systems"
        ]
      },
      {
        "name": "Contact",
        "items": [
          "Lima, Peru",
          "jorge.joshua0124@gmail.com",
          "+51 969 434 766"
        ]
      }
    ],
    "image": "/images/jorge/enterprise-ai.svg",
    "delivers": [
      "Full-stack delivery",
      "Scalable architectures",
      "Engineering leadership",
      "Automated testing and CI/CD"
    ]
  }
];
