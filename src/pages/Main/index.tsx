import { Container, SessaoFormulario } from "./styles";
import { FaCloudDownloadAlt, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdDoubleArrow} from "react-icons/md";
import { ContainerSkills } from "../../components/CardSkills/index"
import { CardProject } from "../../components/CardProject";
import Foto from "../../assets/lau-circle1.png";
import Foto2 from "../../assets/foto2.jpg";
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"
import p5 from '../../assets/p5.png'

export function Main() {

  return (
    <>
      <Container
      style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)"}}

      >
        <section className="topo-do-site" id="inicio">
          <div className="interface topoo" >
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

              <div className="arrow-desktop">
                    < MdDoubleArrow size={50} />
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
                  Olá, sou Lauanderson, um apaixonado por tecnologia e desenvolvimento web. Tenho 21 anos e estou no 3º período do curso de Análise e Desenvolvimento de Sistemas no IFMA. Ao longo da minha jornada, adquiri experiência sólida em front-end, com foco em React e Next.js, e continuo em constante aprendizado sobre as novas tendências e ferramentas do desenvolvimento web.

Minha principal motivação é criar soluções inovadoras e eficientes. Além disso tenho habilidades em backend, utilizando Node.js e Express, e sou adepto de boas práticas com Git e GitHub para controle de versão.
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
                    <button> <FaCloudDownloadAlt style={{ width: "30px" }} /> Download CV</button>
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
            <CardProject
              image={p1}
              title="Site de Zebras de Futebol"
              description="Nesse projeto criei o Front end de um site de apostas esportivas. Pude colocar em prática muitos de meus conhecimentos em Desiner Responsivo"
              projectLink="https://templates-zebras.vercel.app/home/index.html"
              repoLink="https://github.com/lauanderson-rael/templates-zebras"
              technologies={['html', 'CSS', 'JavaScript']}
            />
            <CardProject
              image={p2}
              title="Lista de Heróis"
              description="Nesse projeto fiz o consumo de uma Api Rest, realizei requisições GET com Axios e também adicionei algumas funcionalidades como as opções de listagem e filtragem. "
              projectLink="https://react-list-heroes-chi.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/react-list-heroes"
              technologies={['React', 'CSS']}
            />
            <CardProject
              image={p5}
              title="Blog de Emagrecimento"
              description="Nesse projeto criei um blog básico utilizando react e consumindo dados de uma api com fetch. Os estilos do projeto foram com css puro."
              projectLink="https://react-blog-puce-nine.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/react-blog"
              technologies={['react', 'Styled-Components']}
            />
            <CardProject
              image={p3}
              title="Todo List"
              description="Nesse projeto desenvolvi um Todo List básico utilizando a biblioteca React. Pude abordar o uso de alguns Hooks do react, como useState"
              projectLink="https://react-todo-list-three-beta.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/react-todo-list"
              technologies={['React', 'CSS']}
            />

            <CardProject
              image={p4}
              title="Repositorios Favoritos"
              description="Nesse projeto desenvolvi um sistema para salvar os meu repositorios favoritos do github, podendo tambem visualizar algumas informações coma as issues. Para acessar os dados fiz um consumo da api do github com axios."
              projectLink="https://atividade-dev-web.vercel.app/"
              repoLink="https://github.com/lauanderson-rael/html-atividade1"
              technologies={['react', 'Styled-Components']}
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

    </>
  );
}
