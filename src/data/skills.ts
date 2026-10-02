export interface Skill {
  name: string;
  level?: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    "title": "Frontend",
    "icon": "💻",
    "skills": [
      {
        "name": "React"
      },
      {
        "name": "Next.js"
      },
      {
        "name": "TypeScript"
      },
      {
        "name": "JavaScript"
      },
      {
        "name": "HTML5"
      },
      {
        "name": "CSS3"
      },
      {
        "name": "Angular"
      },
      {
        "name": "Vue.js"
      }
    ]
  },
  {
    "title": "Backend",
    "icon": "💻",
    "skills": [
      {
        "name": "Node.js"
      },
      {
        "name": "Express"
      },
      {
        "name": "Nest.js"
      },
      {
        "name": "Python"
      },
      {
        "name": "FastAPI"
      },
      {
        "name": "Flask"
      },
      {
        "name": "Java"
      },
      {
        "name": "Spring Boot"
      },
      {
        "name": "PHP"
      },
      {
        "name": "RESTful APIs"
      },
      {
        "name": ".NET/C#"
      },
      {
        "name": "ASP.NET"
      }
    ]
  },
  {
    "title": "AI/ML & LLMs",
    "icon": "💻",
    "skills": [
      {
        "name": "SFT"
      },
      {
        "name": "RLHF"
      },
      {
        "name": "RLMF"
      },
      {
        "name": "Prompt Engineering"
      },
      {
        "name": "RAG Architectures"
      },
      {
        "name": "LangChain"
      },
      {
        "name": "Generative AI"
      },
      {
        "name": "Agent Workflows"
      }
    ]
  },
  {
    "title": "Databases & Caching",
    "icon": "💻",
    "skills": [
      {
        "name": "PostgreSQL"
      },
      {
        "name": "MySQL"
      },
      {
        "name": "MongoDB"
      },
      {
        "name": "Redis"
      },
      {
        "name": "Kafka"
      }
    ]
  },
  {
    "title": "Cloud & DevOps",
    "icon": "💻",
    "skills": [
      {
        "name": "AWS"
      },
      {
        "name": "Docker"
      },
      {
        "name": "Kubernetes"
      },
      {
        "name": "Terraform"
      },
      {
        "name": "GitHub Actions"
      },
      {
        "name": "CI/CD Pipelines"
      }
    ]
  },
  {
    "title": "Testing & Quality",
    "icon": "💻",
    "skills": [
      {
        "name": "Jest"
      },
      {
        "name": "pytest"
      },
      {
        "name": "JUnit"
      }
    ]
  },
  {
    "title": "Blockchain & Web3",
    "icon": "💻",
    "skills": [
      {
        "name": "Web3.js"
      },
      {
        "name": "Solidity"
      },
      {
        "name": "Ethereum"
      },
      {
        "name": "Truffle"
      },
      {
        "name": "Smart Contracts"
      },
      {
        "name": "NFT Development"
      },
      {
        "name": "CertiK Audit"
      }
    ]
  }
];
