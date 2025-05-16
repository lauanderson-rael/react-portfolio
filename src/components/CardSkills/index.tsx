
import {
  SiExpress, SiJavascript,
  SiTailwindcss, SiTypescript, SiBootstrap,
  SiMongodb, SiWordpress, SiSequelize, SiDjango, SiFastapi,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaReact, FaDocker, FaFigma } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import { FaProjectDiagram, FaColumns } from 'react-icons/fa';

export const ContainerSkills = () => {

  return (
    <>
      <div className="especialidades-box">
        <strong>Front-end</strong>
        <div className="flex-skills">
          <div className="center">
            <div className="icone"> <SiJavascript fill="#f5d001" /></div>
            <p>JavaScript</p>
          </div>

          <div className="center">
            <div className="icone"> <SiTypescript fill="#0189e4df"/></div>
            <p>TypeScript</p>
          </div>

          <div className="center">
            <div className="icone"> <FaReact fill="aqua"/></div>
            <p>React</p>
          </div>

          <div className="center">
            <div className="icone"> <RiNextjsFill fill="gray" /></div>
            <p>NextJS</p>
          </div>

          <div className="center">
            <div className="icone"> <SiTailwindcss fill="aqua" /></div>
            <p>TailwindCSS</p>
          </div>

          <div className="center">
            <div className="icone"> <SiBootstrap fill="#f003d0" /></div>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>

      <div className="especialidades-box">
        <strong>Back-end</strong>
        <div className="flex-skills" >

          <div className="center">
            <div className="icone"> <SiExpress fill="gray" /></div>
            <p>Express.js</p>
          </div>

          <div className="center">
            <div className="icone"> <SiDjango  fill="#008648"/></div>
            <p>Django</p>
          </div>

          <div className="center">
            <div className="icone"> <SiFastapi fill="#03c96d"/></div>
            <p>Fastapi</p>
          </div>

          <div className="center">
            <div className="icone"> <SiSequelize fill="#1f77fc" /></div>
            <p>Sequelize</p>
          </div>

          <div className="center">
            <div className="icone"> <SiMongodb fill="#02af19"/></div>
            <p>Mongo DB</p>
          </div>

          <div className="center">
            <div className="icone"> <BiLogoPostgresql fill="#1f77fc"/></div>
            <p>Postgresql</p>
          </div>

        </div>
      </div>

      <div className="especialidades-box">
        <strong>Ferramentas e Metodologias</strong>
        <div className="flex-skills">

          <div className="center">
            <div className="icone"> <FaGitAlt fill="#fc531f"/></div>
            <p>Git</p>
          </div>

          <div className="center">
            <div className="icone"> <FaGithub fill="gray"/></div>
            <p>Github</p>
          </div>

          <div className="center">
            <div className="icone"> <FcLinux /></div>
            <p>Linux</p>
          </div>

          <div className="center">
            <div className="icone"> <FaDocker fill="#1f77fc" /></div>
            <p>Docker</p>
          </div>

           <div className="center">
            <div className="icone"> <FaFigma  fill="pink" /></div>
            <p>Figma</p>
          </div>

          <div className="center">
            <div className="icone"> <SiWordpress fill="#1f77fc"/></div>
            <p>Wordpress</p>
          </div>

           <div className="center">
      <div className="icone"> <FaProjectDiagram fill="#ffc107"/></div>
      <p>Scrum</p>
    </div>

    <div className="center">
      <div className="icone"> <FaColumns fill="#17a2b8"/></div>
      <p>Kanban</p>
    </div>

        </div>
      </div>
    </>
  )
}
