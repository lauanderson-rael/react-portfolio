
import { SiExpress, SiJavascript, SiPostgresql, SiTailwindcss, SiTypescript, SiStyledcomponents, SiMongodb , SiWordpress} from "react-icons/si";
import { FaGitAlt, FaGithub, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export const ContainerSkills = () =>{

    return (
    <>
        <div className="especialidades-box">
            <strong>Front-end</strong>
              <div className="flex-skills">
                <div className="center">
                  <div className="icone"> <SiJavascript/></div>
                  <p>JavaScript</p>
                </div>
                <div className="center">
                  <div className="icone"> <SiTailwindcss/></div>
                  <p>TailwindCSS</p>
                </div>
                
                <div className="center">
                  <div className="icone"> <SiTypescript/></div>
                  <p>TypeScript</p>
                </div>
                <div className="center">
                  <div className="icone"> <FaReact/></div>
                  <p>React</p>
                </div>

                <div className="center">
                  <div className="icone"> <SiStyledcomponents /></div>
                  <p>Styled Components</p>
                </div>
              </div>
          </div>

          <div className="especialidades-box">
            <strong>Back-end</strong>
              <div className="flex-skills" >
                <div className="center">
                  <div className="icone"> <FaNodeJs/></div>
                  <p>Node.js</p>
                </div>

                <div className="center">
                  <div className="icone"> <SiExpress/></div>
                  <p>Express.js</p>
                </div>

                <div className="center">
                  <div className="icone"> <SiPostgresql/></div>
                  <p>Postgresql</p>
                </div>

                <div className="center">
                  <div className="icone"> <SiMongodb/></div>
                  <p>Mongo DB</p>
                </div>
              </div>
        </div>

        <div className="especialidades-box">
            <strong>Ferramentas e Controle de Versão</strong>
              <div className="flex-skills">
                <div className="center">
                  <div className="icone"> <VscVscode/></div>
                  <p>VS Code</p>
                </div>

                <div className="center">
                  <div className="icone"> <FaGitAlt/></div>
                  <p>Git</p>
                </div>

                <div className="center">
                  <div className="icone"> <FaGithub/></div>
                  <p>Github</p>
                </div>

                <div className="center">
                  <div className="icone"> <FaDocker/></div>
                  <p>Docker</p>
                </div>

                <div className="center">
                  <div className="icone"> <SiWordpress/></div>
                  <p>Wordpress</p>
                </div>

              </div>
        </div>
    </>
)}
