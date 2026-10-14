import { Container } from "./styles";
import {
  FaCloudDownloadAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { ContainerSkills } from "../../components/CardSkills/index";
import { CardProject } from "../../components/CardProject";
import { AcademicHistory } from "../../components/AcademicHistory/index.tsx";
import { ProfessionalExperience } from "../../components/ProfessionalExperience/index.tsx";
import { VideoGrid, VideoCardItem } from "../../components/VideoCard";
import { Contact } from "../../components/Contact";
import { videos } from "../Youtube/videos";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { gsap, prefersReducedMotion, responsiveDuration, useGSAP } from "../../lib/gsap";
import { useReveal } from "../../hooks/useReveal";
import Foto from "../../assets/perfil.jpg";
import Foto2 from "../../assets/formatura-pe.jpg";
import { projetos } from "./arrayProjects.ts";
import { contagemPorCategoria } from "./arrayProjects.ts";

export function Main() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const heroRef = useRef<HTMLElement | null>(null);
  const sobreRef = useReveal<HTMLElement>({ selector: ".reveal-sobre", y: 28, stagger: 0.1 });
  const skillsRef = useReveal<HTMLElement>({ selector: ".especialidades-box", y: 28, stagger: 0.12 });
  const youtubeRef = useReveal<HTMLElement>({ y: 24 });
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Entrada do hero: textos + foto + botões (escopo = seção hero).
  useGSAP(
    () => {
      if (prefersReducedMotion() || !heroRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".txt-topo-site .informacoes > *", {
        y: 24,
        opacity: 0,
        duration: responsiveDuration(0.6),
        stagger: 0.1,
        clearProps: "transform,opacity",
      })
        .from(
          ".img-topo-site img",
          {
            scale: 0.94,
            opacity: 0,
            duration: responsiveDuration(0.7),
            clearProps: "transform,opacity",
          },
          "-=0.4",
        )
        .from(
          ".txt-topo-site .btn-contato",
          {
            y: 16,
            opacity: 0,
            duration: responsiveDuration(0.45),
            stagger: 0.08,
            clearProps: "transform,opacity",
          },
          "-=0.4",
        );
    },
    { scope: heroRef },
  );

  // Entrada do grid via ScrollTrigger + re-anima quando o filtro muda
  // (dependencies + revertOnUpdate, skill gsap-react).
  useGSAP(
    () => {
      if (prefersReducedMotion() || !gridRef.current) return;
      gsap.from(gridRef.current.children, {
        y: 20,
        opacity: 0,
        duration: responsiveDuration(0.45),
        ease: "power2.out",
        stagger: 0.06,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
      });
    },
    { scope: gridRef, dependencies: [categoriaSelecionada], revertOnUpdate: true },
  );
  const categorias = [
    "todos",
    "frontend",
    "backend",
    "fullStack",
    "mobile",
    "design",
  ];
  const projetosFiltrados =
    categoriaSelecionada === "todos"
      ? projetos
      : projetos.filter((p) => p.category === categoriaSelecionada);

  const estiloBotao = (ativo: boolean) => ({
    padding: "10px 20px",
    borderRadius: "30px",
    border: ativo ? "none" : "1px solid black",
    backgroundColor: ativo ? "var(--text-color-blue-green)" : "#fff",
    color: ativo ? "var(--text-color2)" : "#313436",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });

  return (
    <>
      <Container
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
        }}
      >
        <section className="topo-do-site" id="inicio" ref={heroRef}>
          <div className="interface topoo">
            <div className="flex">
              <div className="txt-topo-site">
                <div className="informacoes">
                  <p>Olá, eu sou</p>

                  <h1>Lauanderson Rael</h1>

                  <p>Desenvolvedor Full Stack</p>
                </div>

                <div style={{ display: "flex", gap: "30px" }}>
                  <div className="btn-contato linkedin">
                    <a
                      href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/"
                      target="_blank"
                    >
                      <button>
                        {" "}
                        <FaLinkedin style={{ width: "30px" }} /> Linkedin
                      </button>
                    </a>
                  </div>

                  <div className="btn-contato github">
                    <a
                      href="https://github.com/lauanderson-rael"
                      target="blank"
                      download={"curriculo.pdf"}
                    >
                      <button>
                        <FaGithub style={{ width: "30px" }} /> GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-topo-site">
                <img
                  src={Foto}
                  alt="Foto de perfil de Lauanderson Rael, Desenvolvedor Full Stack"
                />
              </div>
            </div>

            <div className="arrow-desktop">
              <MdDoubleArrow size={50} />
            </div>
          </div>
        </section>

        <section className="sobre" id="sobre" ref={sobreRef}>
          <div className="interface">
            <div className="flex">
              <div className="img-sobre reveal-sobre">
                <img src={Foto2} alt="foto sessão sobre" />
              </div>

              <div className="txt-sobre reveal-sobre">
                <h2>
                  Sobre{" "}
                  <b style={{ color: "var(--text-color-blue-green)" }}>mim</b>
                </h2>
                <div className="img-sobre img-sobre-mobile">
                  <img src={Foto2} alt="foto sessão sobre" />
                </div>
                <p>
                  Olá, sou Lauanderson, um apaixonado por tecnologia e
                  desenvolvimento web. Graduado em Análise e Desenvolvimento de
                  Sistemas pelo IFMA em 2026. Possuo experiência em
                  desenvolvimento full stack, atuando como Desenvolvedor Júnior
                  atualmente, onde aplico IA ao desenvolvimento de software, SDD
                  e ferramentas como SpecKit, Codex e MCP. Tenho experiência com
                  React, Next.js, Node.js, TypeScript e Python. Além disso,
                  possuo conhecimentos em Linux, Docker e boas práticas de
                  versionamento com Git e GitHub.
                </p>

                <div className="btn-contato curriculo">
                  <a
                    href={import.meta.env.VITE_CV_URL}
                    target="blank"
                    download={"curriculo_lauanderson.pdf"}
                  >
                    <button>
                      {" "}
                      <FaCloudDownloadAlt style={{ width: "30px" }} /> Download
                      CV
                    </button>
                  </a>
                </div>

                <div className="btn-social">
                  <a
                    href="https://www.instagram.com/lauanderson.rael?igsh=MWMxNDZjN3VhdjA3Nw=="
                    target="blank"
                  >
                    <button style={{ color: "DeepPink" }}>
                      <FaInstagram />
                    </button>
                  </a>
                  <a href="https://www.youtube.com/@lau_dicas" target="blank">
                    <button style={{ color: "red" }}>
                      <FaYoutube />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/"
                    target="blank"
                  >
                    <button style={{ color: "RoyalBlue" }}>
                      <FaLinkedin />
                    </button>
                  </a>
                  <a href="https://github.com/lauanderson-rael" target="blank">
                    <button style={{ color: "gray" }}>
                      <FaGithub />
                    </button>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=98985571212&text=Ol%C3%A1,%20vim%20falar%20com%20voc%C3%AA"
                    target="blank"
                  >
                    <button style={{ color: "lime" }}>
                      <FaWhatsapp />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ alignItems: "center" }}>
          <AcademicHistory />
          <ProfessionalExperience />
        </section>

        <section className="especialidades" id="especialidades" ref={skillsRef}>
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                margin: "24px 0",
                justifyContent: "center",
              }}
            >
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  style={estiloBotao(categoriaSelecionada === categoria)}
                >
                  {categoria.toUpperCase()} (
                  {contagemPorCategoria[categoria] || 0})
                </button>
              ))}
            </div>

            {/* Projetos */}
            <div className="grid" ref={gridRef}>
              {projetosFiltrados.map((projeto) => (
                <CardProject
                  key={projeto.title}
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

        {/* SEÇÃO CANAL NO YOUTUBE */}
        <section className="youtube-preview" id="youtube" ref={youtubeRef}>
          <div className="interface">
            <h2 className="titulo">
              Meu Canal no <span>YouTube</span>
            </h2>

            <VideoGrid>
              {videos.slice(0, 3).map((item) => (
                <VideoCardItem key={item.id} video={item} />
              ))}
            </VideoGrid>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "36px",
              }}
            >
              <Link to="/youtube" className="youtube-link-btn">
                <FaYoutube /> Ver mais vídeos
              </Link>
            </div>
          </div>
        </section>

        <span id="formulario"></span>
        <Contact />
      </Container>
    </>
  );
}
