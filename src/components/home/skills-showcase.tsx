"use client";

import { SkillIcon } from "@/components/common/skill-icon";

interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  {
    "name": "React",
    "logo": "https://skillicons.dev/icons?i=react"
  },
  {
    "name": "Next.js",
    "logo": "https://skillicons.dev/icons?i=nextjs"
  },
  {
    "name": "TypeScript",
    "logo": "https://skillicons.dev/icons?i=ts"
  },
  {
    "name": "JavaScript",
    "logo": "https://skillicons.dev/icons?i=js"
  },
  {
    "name": "HTML5",
    "logo": "https://skillicons.dev/icons?i=html"
  },
  {
    "name": "CSS3",
    "logo": "https://skillicons.dev/icons?i=css"
  },
  {
    "name": "Angular",
    "logo": "https://skillicons.dev/icons?i=angular"
  },
  {
    "name": "Vue.js",
    "logo": "https://skillicons.dev/icons?i=vue"
  },
  {
    "name": "Node.js",
    "logo": "https://skillicons.dev/icons?i=nodejs"
  },
  {
    "name": "Express",
    "logo": "https://skillicons.dev/icons?i=express"
  },
  {
    "name": "Nest.js",
    "logo": "https://skillicons.dev/icons?i=nestjs"
  },
  {
    "name": "Python",
    "logo": "https://skillicons.dev/icons?i=python"
  },
  {
    "name": "FastAPI",
    "logo": "https://skillicons.dev/icons?i=fastapi"
  },
  {
    "name": "Flask",
    "logo": "https://skillicons.dev/icons?i=flask"
  },
  {
    "name": "Java",
    "logo": "https://skillicons.dev/icons?i=java"
  },
  {
    "name": "Spring Boot",
    "logo": "https://skillicons.dev/icons?i=spring"
  },
  {
    "name": "PHP",
    "logo": "https://skillicons.dev/icons?i=php"
  },
  {
    "name": "RESTful APIs",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": ".NET/C#",
    "logo": "https://skillicons.dev/icons?i=dotnet"
  },
  {
    "name": "ASP.NET",
    "logo": "https://skillicons.dev/icons?i=dotnet"
  },
  {
    "name": "SFT",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "RLHF",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "RLMF",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Prompt Engineering",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "RAG Architectures",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "LangChain",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Generative AI",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Agent Workflows",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "PostgreSQL",
    "logo": "https://skillicons.dev/icons?i=postgres"
  },
  {
    "name": "MySQL",
    "logo": "https://skillicons.dev/icons?i=mysql"
  },
  {
    "name": "MongoDB",
    "logo": "https://skillicons.dev/icons?i=mongodb"
  },
  {
    "name": "Redis",
    "logo": "https://skillicons.dev/icons?i=redis"
  },
  {
    "name": "Kafka",
    "logo": "https://skillicons.dev/icons?i=kafka"
  },
  {
    "name": "AWS",
    "logo": "https://skillicons.dev/icons?i=aws"
  },
  {
    "name": "Docker",
    "logo": "https://skillicons.dev/icons?i=docker"
  },
  {
    "name": "Kubernetes",
    "logo": "https://skillicons.dev/icons?i=kubernetes"
  },
  {
    "name": "Terraform",
    "logo": "https://skillicons.dev/icons?i=terraform"
  },
  {
    "name": "GitHub Actions",
    "logo": "https://skillicons.dev/icons?i=githubactions"
  },
  {
    "name": "CI/CD Pipelines",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Jest",
    "logo": "https://skillicons.dev/icons?i=jest"
  },
  {
    "name": "pytest",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "JUnit",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Web3.js",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Solidity",
    "logo": "https://skillicons.dev/icons?i=solidity"
  },
  {
    "name": "Ethereum",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Truffle",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "Smart Contracts",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "NFT Development",
    "logo": "/me/jorge-initials.png"
  },
  {
    "name": "CertiK Audit",
    "logo": "/me/jorge-initials.png"
  }
];

export function SkillsShowcase() {
  const rows = [skills.slice(0, 19), skills.slice(19, 38), skills.slice(38)];
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background text-foreground overflow-hidden py-24" aria-label="Core skills">
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight gradient-text">Core Skills</h2>
        <p className="text-muted-foreground text-lg">Tools and technologies from my professional experience</p>
      </div>
      <div className="relative z-10 w-full space-y-8 skills-marquees">
        {rows.map((row, i) => (
          <div key={i} className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
            <div className={`skills-track ${i === 1 ? "skills-track-reverse" : ""}`}>
              {[0, 1].map(copy => (
                <div key={copy} className="skills-track-group" aria-hidden={copy === 1 ? true : undefined}>
                  {row.map(skill => <SkillIcon key={skill.name} skill={skill} />)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

