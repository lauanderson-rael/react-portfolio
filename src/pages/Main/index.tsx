import { Container, SessaoFormulario } from "./styles";
import { FaCloudDownloadAlt, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { ContainerSkills } from "../../components/CardSkills/index"
import { CardProject } from "../../components/CardProject";
import { useState } from "react";
import Foto from "../../assets/transp.png";
import Foto2 from "../../assets/foto3.jpg";
import { projetos } from './arrayProjects.ts'
import { contagemPorCategoria } from "./arrayProjects.ts";
export function Main() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const categorias = ["todos", "frontend", "backend", "fullStack", "design"];
  const projetosFiltrados =
    categoriaSelecionada === "todos"
      ? projetos
      : projetos.filter((p) => p.category === categoriaSelecionada);

  const estiloBotao = (ativo: any) => ({
    padding: "10px 20px",
    borderRadius: "30px",
    border: ativo ? "none" : '1px solid black',
    backgroundColor: ativo ? "var(--text-color-blue-green)" : "#fff",
    color: ativo ? "var(--text-color2)" : "#313436",
    fontWeight: "bold",
    fontSize: 'small',
    cursor: "pointer",
    transition: "all 0.3s ease",
  });


  return (
    <>
      <Container
        style={{ backgroundColor: "var(--background-color)", color: "var(--text-color)" }}

      >
        <section className="topo-do-site" id="inicio">
          <div className="interface topoo" >
            <div className="flex">
              <div className="txt-topo-site">

                <div className="informacoes">
                  <p>Olá, eu sou</p>

                  <strong >Lauanderson Rael</strong>

                  <p>Desenvolvedor Full Stack</p>
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
                  Sobre <b style={{ color: "var(--text-color-blue-green)" }}>mim</b>
                </h2>
                <div className="img-sobre img-sobre-mobile">
                  <img src={Foto2} alt="foto sessão sobre" />
                </div>
                <p>
                  Olá, sou Lauanderson, um apaixonado por tecnologia e desenvolvimento web. Atualmente, curso o 4° período de Análise e Desenvolvimento de Sistemas no IFMA.
                  Possuo experiência em desenvolvimento front-end com React e Next.js, além de conhecimentos
                  em design de interfaces com Figma. No back-end, tenho familiaridade com Node.js, Express,
                  Django, FastAPI e também desenvolvo automações com Python. Além disso tenho conhecimento
                  em linux, docker e sigo boas práticas de versionamento com Git e Github.
                </p>

                <div className="btn-contato curriculo">
                  <a
                    href="https://drive.google.com/file/d/1of_2eZM5SPaHP07UAEaOd2vOmB7yVhT1/view?usp=drivesdk"
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

                  <a href="https://api.whatsapp.com/send?phone=98985571212&text=Ol%C3%A1,%20vim%20falar%20com%20voc%C3%AA" target="blank">
                    <button>
                      <FaWhatsapp />
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
            {/* Botões de filtro */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", margin: "24px 0", justifyContent: "center" }}>
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  style={estiloBotao(categoriaSelecionada === categoria)}
                >
                  {categoria.toUpperCase()} ({contagemPorCategoria[categoria] || 0})
                </button>
              ))}
            </div>

            {/* Projetos */}
            <div className="grid">
              {projetosFiltrados.map((projeto, index) => (
                <CardProject
                  key={index}
                  image={projeto.image}
                  title={projeto.title}
                  description={projeto.description}
                  projectLink={projeto.projectLink}
                  repoLink={projeto.repoLink}
                  technologies={projeto.technologies}
                />
              ))}
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

              <div className="btn-enviar" style={{ display: 'flex', gap: '10px' }}>
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
