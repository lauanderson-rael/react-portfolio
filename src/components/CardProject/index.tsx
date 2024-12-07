import React from 'react';
import { IoOpen } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa";
import { ContainerCards } from './styles';


interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  projectLink: string;
  repoLink: string;
  technologies: string[];
}

export const CardProject: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  projectLink,
  repoLink,
  technologies,
}) => {
  return (
   <ContainerCards>
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-links" style={{color: "#fff"}}>
          <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <IoOpen className='icon-link'/>
            visualizar projeto
          </a>
          <span style={{margin: "0 10px"}}></span>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaCodeBranch className='icon-link' />
            Repositório
          </a>
        </div>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </ContainerCards>
  );
};
