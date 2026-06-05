import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFire } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiPostman, SiFigma } from 'react-icons/si';

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, level: "Advanced" },
      { name: "JavaScript", icon: FaJsSquare, level: "Advanced" },
      { name: "HTML5", icon: FaHtml5, level: "Advanced" },
      { name: "CSS3", icon: FaCss3Alt, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate" },
      { name: "Express.js", icon: SiExpress, level: "Intermediate" },
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
      { name: "Firebase", icon: SiFirebase, level: "Intermediate" },
      { name: "SQL", icon: FaDatabase, level: "Intermediate" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt, level: "Advanced" },
      { name: "Postman", icon: SiPostman, level: "Intermediate" },
      { name: "Figma", icon: SiFigma, level: "Beginner" },
      { name: "Vulnerability Assessment", icon: FaFire, level: "Intermediate" },
    ]
  }
];
