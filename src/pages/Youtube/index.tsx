import { Container, YoutubeHero } from "./styles";
import { VideoGrid, VideoCardItem } from "../../components/VideoCard";
import { videos } from "./videos";
import { Contact } from "../../components/Contact";
import { FaYoutube } from "react-icons/fa";
import { useReveal } from "../../hooks/useReveal";

export default function Youtube() {
  const heroRef = useReveal<HTMLDivElement>({ y: 20 });
  const gridRef = useReveal<HTMLElement>({ selector: ".video-card-anim", y: 24, stagger: 0.08 });
  return (
    <Container>
      {/* HERO SECTION */}
      <YoutubeHero ref={heroRef}>
        <h1>
          Meu Canal no <span>YouTube</span>
        </h1>
        <p>
          Confira meus tutoriais, playlists e conteúdos sobre desenvolvimento de
          software, ferramentas modernas, Git & GitHub e Inteligência Artificial.
        </p>

        <a
          href="https://www.youtube.com/@lau_dicas"
          target="_blank"
          rel="noopener noreferrer"
          className="channel-btn"
        >
          <FaYoutube /> Inscrever-se no Canal @lau_dicas
        </a>
      </YoutubeHero>

      {/* GRID DE VÍDEOS */}
      <VideoGrid ref={gridRef}>
        {videos.map((item) => (
          <div key={item.id} className="video-card-anim">
            <VideoCardItem video={item} />
          </div>
        ))}
      </VideoGrid>

      <Contact />
    </Container>
  );
}
