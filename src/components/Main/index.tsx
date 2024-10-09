import { Container, Footer, SessaoFormulario } from "./styles";
import { FaCloudDownloadAlt, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ContainerSkills } from "./containerSkills";
import ProjectCard from "./projectCard";
import Foto from "../../assets/lau-circle1.png";
import Foto2 from "../../assets/foto2.jpg";
import Logo from "../../assets/logo22.png";
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"

export function Main() {
  return (
    <>
      <Container>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">

                <div className="informacoes">
                  <p>Olá, eu sou</p>

                  <strong>Lauanderson Rael</strong>

                  <p>Desenvolvedor Front-end</p>
                </div>

                <div style={{ display: "flex", gap: "30px" }}>
                  <div className="btn-contato linkedin">
                    <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="_blank">
                      <button> <FaLinkedin style={{ width: "30px" }} /> Linkedin</button>
                    </a>
                  </div>

                  <div className="btn-contato github">
                    <a
                      href="https://github.com/lauanderson-rael"
                      target="blank"
                      download={"curriculo.pdf"}>
                      <button><FaGithub style={{ width: "30px" }} /> GitHub</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-topo-site">
                <img src={Foto} alt="foto perfil" />
              </div>
            </div>

          </div>
        </section>

        <section className="sobre" id="sobre">
          <div className="interface">
            <div className="flex">
              <div className="img-sobre">
                <img src={Foto2} alt="foto sessão sobre" />
              </div>

              <div className="txt-sobre">
                <h2>
                  Sobre <b style={{ color: "#00ff08" }}>mim</b>
                </h2>
                <div className="img-sobre img-sobre-mobile">
                  <img src={Foto2} alt="foto sessão sobre" />
                </div>
                <p>
                  Apaixonado por desafios e tecnologia, sou um desenvolvedor front-end com experiência em HTML, CSS, JavaScript, ReactJS , 
                  TypeScript e Node.js. Atualmente, estou me aprofundando no back-end para me tornar um desenvolvedor full stack. Estou 
                  cursando o 3º semestre de Análise e Desenvolvimento de Sistemas. Adoro explorar novas tecnologias, desafiar minhas 
                  habilidades com os códigos e utilizá-las para criar soluções inovadoras e de alta qualidade.

                </p>
                <p>
                  Atualmente Desenvolvo projetos pessoais para praticar minhas habilidades e construir meu portfólio, incluindo sites
                  simples, aplicativos da web e até mesmo contribuições para projetos de código aberto.

                </p>

                <div className="btn-contato curriculo">
                  <a
                    href="https://drive.google.com/file/d/13ZmWZDWJdG8-xzIqT_NeVmCnrkT0p21Q/view?usp=drivesdk"
                    target="blank"
                    download={"curriculo.pdf"}>
                    <button> <FaCloudDownloadAlt style={{ width: "30px" }} /> Currículo</button>
                  </a>
                </div>

                <div className="btn-social">
                  <a href="https://www.instagram.com/lauanderson.rael?igsh=MWMxNDZjN3VhdjA3Nw==" target="blank">
                    <button>
                      <FaInstagram />
                    </button>
                  </a>
                  <a href="https://www.youtube.com/@lau_dicas" target="blank">
                    <button>
                      <FaYoutube />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="blank">
                    <button>
                      <FaLinkedin />
                    </button>
                  </a>
                  <a href="https://github.com/lauanderson-rael" target="blank">
                    <button>
                      <FaGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="especialidades" id="especialidades">
          <div className="interface">
            <h2 className="titulo">
              Minhas <span>habilidades</span>
            </h2>
            <div className="flex-NO">

              <ContainerSkills />

            </div>
          </div>
        </section>

        <section className="portfolio" id="projetos">
          <div className="interface">
            <h2 className="titulo">
              Meus <span>Projetos</span>
            </h2>
            <div className="grid">
            <ProjectCard
              image={p1}
              title="Site de Zebras de Futebol"
              description="Nesse projeto criei o Front end de um site de apostas esportivas. Pude colocar em prática muitos de meus conhecimentos em Desiner Responsivo"
              projectLink="https://templates-zebras.vercel.app/home/index.html"
              repoLink="https://github.com/lauanderson-rael/templates-zebras"
              technologies={['html', 'CSS', 'JavaScript']}
            />
            <ProjectCard
              image={p2}
              title="Lista de Heróis"
              description="Nesse projeto fiz o consumo de uma Api Rest, realizei requisições GET com Axios e também adicionei algumas funcionalidades como as opções de listagem e filtragem. "
              projectLink="https://react-list-heroes-chi.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/react-list-heroes"
              technologies={['React', 'CSS', 'JavaScript']}
            />
            <ProjectCard
              image={p3}
              title="Todo List"
              description="Nesse projeto desenvolvi um Todo List básico utilizando a biblioteca React. Pude abordar o uso de alguns Hooks do react, como useState"
              projectLink="https://react-todo-list-three-beta.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/react-todo-list"
              technologies={['React', 'CSS', 'JavaScript']}
            />
           
            <ProjectCard
              image={p4}
              title="ADS - IFMA CN"
              description="Site estático desenvolvido com html e CSS. Esse projeto foi uma atividade proposta pelo professor da disciplina de Programação Web, do meu curso de Analise e desenvolvimento de sistemas."
              projectLink="https://atividade-dev-web.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/html-atividade1"
              technologies={['Html', 'CSS']}
            />

            </div>
          </div>
        </section>

        <span id="formulario"></span>
        <SessaoFormulario>
          <div>
            <h2 className="titulo">
              Fale<span> comigo</span>
            </h2>

            <form action="mailto:lauanderson38@gmail.com" method="POST" encType="text/plain">
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu nome completo"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu e-mail"
                required
              />

              <input type="text" name="" id="" placeholder="Seu celular" />
              <textarea name="" id="" placeholder="Sua mensagem"></textarea>

              <div className="btn-enviar" style={{display: 'flex', gap: '10px'}}>
                <input type="submit" value="ENVIAR" />
                <input type="reset" value="LIMPAR" />
              </div>
            </form>
          </div>
        </SessaoFormulario>
      </Container>

      <Footer>
        <div className="line-footer">
          <div className="flex">
          
            <div className="btn-social">
             <a href="https://www.instagram.com/lauanderson.rael?igsh=MWMxNDZjN3VhdjA3Nw==" target="blank">
                <button>
                  <FaInstagram />
                </button>
              </a>
              <a href="https://www.youtube.com/@lau_dicas" target="blank">
                <button>
                  <FaYoutube />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="blank">
                <button>
                  <FaLinkedin />
                </button>
              </a>
              <a href="https://github.com/lauanderson-rael" target="blank">
                <button>
                  <FaGithub />
                </button>
              </a>

              <a  href="mailto:lauanderson38@gmail.com" target="blank">
                <button>
                  <IoIosMail />
                </button>
              </a>
            </div>

            <div className="logo-footer">
              <img src={Logo} alt="Logotipo portfolio" />
            </div>
          </div>
        </div>
        <div className="line-footer borda">
          <span>© 2024 Lauanderson Rael. Todos os direitos reservados</span>
        </div>
      </Footer>
    </>
  );
}
