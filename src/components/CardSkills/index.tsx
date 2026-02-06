
import {
  SiExpress, SiJavascript, SiTailwindcss, SiTypescript,
  SiMongodb, SiFastapi, SiNginx, SiGooglecloud,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaReact, FaDocker, FaFigma } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const ContainerSkills = () => {
  return (
    <>
      {/* 1. FRONT-END & MOBILE*/}
      <div className="especialidades-box">
        <strong>Front-end & Mobile</strong>
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
            <div className="icone"> <FaReact fill="#61dafb"/></div>
            <p>React / Native</p>
          </div>

          <div className="center">
            <div className="icone"> <RiNextjsFill fill="gray" /></div>
            <p>NextJS</p>
          </div>

          <div className="center">
            <div className="icone"> <SiTailwindcss fill="#61dafb" /></div>
            <p>Tailwind</p>
          </div>

          <div className="center">
            <div className="icone"> <FaFigma fill="#f357f0ff" /></div>
            <p>Figma</p>
          </div>
        </div>
      </div>

      {/* 2. BACK-END & DATA*/}
      <div className="especialidades-box">
        <strong>Back-end & Databases</strong>
        <div className="flex-skills">
          <div className="center">
            <div className="icone"> <SiExpress fill="gray" /></div>
            <p>Express.js</p>
          </div>

          <div className="center">
            <div className="icone"> <SiNestjs fill="#e02347ff" /></div>
            <p>NestJS</p>
          </div>

          {/* <div className="center">
            <div className="icone"> <SiDjango fill="#008648"/></div>
            <p>Django</p>
          </div> */}

          <div className="center">
            <div className="icone"> <SiFastapi fill="#03c96d"/></div>
            <p>FastAPI</p>
          </div>

          <div className="center">
            <div className="icone"> <SiPrisma fill="#0e2647ff" /></div>
            <p>Prisma ORM</p>
          </div>

          <div className="center">
            <div className="icone"> <SiMongodb fill="#02af19"/></div>
            <p>MongoDB</p>
          </div>

          <div className="center">
            <div className="icone"> <BiLogoPostgresql fill="#1f77fc"/></div>
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>

      {/* 3. ECOSYSTEM & INFRA*/}
      <div className="especialidades-box">
        <strong>Infra</strong>
        <div className="flex-skills">
          <div className="center">
            <div className="icone"> <FaGitAlt fill="#fc531f"/></div>
            <p>Git</p>
          </div>

          <div className="center">
            <div className="icone"> <FaDocker fill="#1f77fc" /></div>
            <p>Docker</p>
          </div>

          <div className="center">
            <div className="icone"> <SiGooglecloud fill="#4285F4" /></div>
            <p>GCP</p>
          </div>

          <div className="center">
            <div className="icone"> <FcLinux /></div>
            <p>Linux</p>
          </div>

           <div className="center">
             <div className="icone"> <SiNginx fill="#009639" /></div>
             <p>Nginx</p>
           </div>

          {/* <div className="center">
            <div className="icone"> <FaProjectDiagram fill="#ffc107"/></div>
            <p>Scrum</p>
          </div> */}
        </div>
      </div>
    </>
  );
};