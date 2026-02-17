import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaJava, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
    SiSpringboot, SiMysql, SiPostgresql, SiPostman,
    SiSwagger, SiVercel, SiReactrouter, SiJson,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

export const skillCategories = [
    {
        id: 'frontend',
        skills: [
            { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
            { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
            { name: 'React.js', icon: FaReact, color: '#61DAFB' },
            { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
        ],
    },
    {
        id: 'backend',
        skills: [
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        ],
    },
    {
        id: 'databases',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        ],
    },
    {
        id: 'tools',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, color: '#181717' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
            { name: 'Scrum', icon: DiScrum, color: '#009FDA' },
            { name: 'Vercel', icon: SiVercel, color: '#000000' },
            { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
            { name: 'JSON', icon: SiJson, color: '#000000' },
        ],
    },
];
