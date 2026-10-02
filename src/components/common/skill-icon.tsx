"use client";
import type { ComponentType } from "react";
import { SiAmazonwebservices, SiAngular, SiApachekafka, SiCss3, SiDocker, SiDotnet, SiEthereum, SiExpress, SiFastapi, SiFlask, SiGithubactions, SiHtml5, SiJavascript, SiJest, SiJunit5, SiKubernetes, SiLangchain, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPhp, SiPostgresql, SiPytest, SiPython, SiReact, SiRedis, SiSolidity, SiSpringboot, SiTerraform, SiTypescript, SiVuedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Bot, Boxes, BrainCircuit, DatabaseZap, FileCode2, Gem, Globe, MessageSquareCode, Network, ShieldCheck, SlidersHorizontal, Sparkles, ThumbsUp, Workflow, Code2 } from "lucide-react";
const icons: Record<string, ComponentType<{ className?: string }>> = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Angular': SiAngular,
  'Vue.js': SiVuedotjs,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Nest.js': SiNestjs,
  'Python': SiPython,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'Spring Boot': SiSpringboot,
  'PHP': SiPhp,
  '.NET/C#': SiDotnet,
  'ASP.NET': SiDotnet,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  'Kafka': SiApachekafka,
  'AWS': SiAmazonwebservices,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'GitHub Actions': SiGithubactions,
  'Jest': SiJest,
  'pytest': SiPytest,
  'JUnit': SiJunit5,
  'Solidity': SiSolidity,
  'Ethereum': SiEthereum,
  'LangChain': SiLangchain,
  'Java': FaJava,
  'RESTful APIs': Network,
  'SFT': BrainCircuit,
  'RLHF': ThumbsUp,
  'RLMF': SlidersHorizontal,
  'Prompt Engineering': MessageSquareCode,
  'RAG Architectures': DatabaseZap,
  'Generative AI': Sparkles,
  'Agent Workflows': Bot,
  'CI/CD Pipelines': Workflow,
  'Web3.js': Globe,
  'Truffle': Boxes,
  'Smart Contracts': FileCode2,
  'NFT Development': Gem,
  'CertiK Audit': ShieldCheck,
};
export function SkillIcon({ skill }: { skill: { name: string } }) {
  const Icon = icons[skill.name] || Code2;
  return <div className="flex flex-col items-center group w-40 h-28 shrink-0">
    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/15 text-primary transition-transform duration-300 group-hover:scale-110" role="img" aria-label={`${skill.name} icon`}>
      <Icon className="w-9 h-9" />
    </div>
    <span className="mt-2 text-sm text-muted-foreground group-hover:text-primary whitespace-nowrap">{skill.name}</span>
  </div>;
}
