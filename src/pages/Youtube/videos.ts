type VideoItem = {
  id: string;
  title: string;
  description: string;
  type: "playlist" | "video";
  embedUrl: string;
  watchUrl: string;
  badge: string;
};

export const videos: VideoItem[] = [
  {
    id: "playlist-git",
    title: "Curso Básico de Git e GitHub",
    description:
      "Playlist completa ensinando os conceitos fundamentais e práticos de versionamento de código, comandos essenciais (git add, commit, push, branch, merge) e gerenciamento de repositórios no GitHub.",
    type: "playlist",
    embedUrl:
      "https://www.youtube.com/embed/videoseries?list=PLuaiizsK2Kzu5R7Re5DLw2xfFRbNR_i4R",
    watchUrl:
      "https://youtube.com/playlist?list=PLuaiizsK2Kzu5R7Re5DLw2xfFRbNR_i4R&si=aMv6qUtzCtCJG755",
    badge: "Playlist Completa",
  },
  {
    id: "opencode-intro",
    title: "OpenCode - Introdução",
    description:
      "Vídeo introdutório ao OpenCode: entenda a proposta da ferramenta e como impulsionar seu ambiente de desenvolvimento e produtividade com Inteligência Artificial.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/U57vZXDn6Bg",
    watchUrl: "https://youtu.be/U57vZXDn6Bg",
    badge: "Vídeo Tutorial",
  },
  {
    id: "opencode-skills-mcps",
    title: "OpenCode - Skills e MCPs",
    description:
      "Aprenda como utilizar Skills personalizadas e servidores MCP (Model Context Protocol) no OpenCode para integrar ferramentas e automatizar workflows complexos.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/6mloZ3sv4kI",
    watchUrl: "https://youtu.be/6mloZ3sv4kI",
    badge: "Vídeo Tutorial",
  },
  {
    id: "gcp-vm-free",
    title: "Como Criar Uma Máquina Virtual de Graça no Google Cloud",
    description:
      "Passo a passo completo para criar e configurar uma Máquina Virtual (VM) totalmente gratuita no Google Cloud Platform (GCP).",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/l0qxq6YIrS8",
    watchUrl: "https://youtu.be/l0qxq6YIrS8",
    badge: "Vídeo Tutorial",
  },
  {
    id: "nestjs-prisma-crud",
    title: "Criando API com NestJS e Prisma: CRUD Completo",
    description:
      "Aprenda a construir uma API robusta e escalável utilizando NestJS e Prisma ORM, realizando um CRUD completo passo a passo.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/Gw5vgPLfD50",
    watchUrl: "https://youtu.be/Gw5vgPLfD50",
    badge: "Vídeo Tutorial",
  },
  {
    id: "opencode-desktop-ia",
    title: "Como INSTALAR e CONFIGURAR o OpenCode Desktop",
    description:
      "Aprenda a instalar e configurar o OpenCode Desktop e descubra como usar IA para criar um jogo na prática.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/GYEAONwnBuo",
    watchUrl: "https://youtu.be/GYEAONwnBuo",
    badge: "Vídeo Tutorial",
  },
  {
    id: "deploy-nodejs-gcp",
    title: "Deploy de API Node.js no GCP com Nginx, PM2 e SSL Grátis",
    description:
      "Tutorial prático de deploy de aplicações Node.js no Google Cloud, configurando Nginx como proxy reverso, gerenciador PM2 e SSL com Let's Encrypt.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/OG9gMxOLjw8",
    watchUrl: "https://youtu.be/OG9gMxOLjw8",
    badge: "Vídeo Tutorial",
  },
  {
    id: "gemini-api-nodejs",
    title: "Como Usar a API do Gemini no Node.js",
    description:
      "Aprenda a integrar e utilizar a API do Google Gemini em suas aplicações Node.js para adicionar recursos avançados de Inteligência Artificial.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/AGmlDCtmJIU",
    watchUrl: "https://youtu.be/AGmlDCtmJIU",
    badge: "Vídeo Tutorial",
  },
  {
    id: "python-web-scraping",
    title: "Web Scraping com Python: Coletando Dados de sites",
    description:
      "Aprenda a fazer Web Scraping com Python passo a passo para extrair e coletar dados de sites de forma automatizada.",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/cccWOzLcPK0",
    watchUrl: "https://youtu.be/cccWOzLcPK0",
    badge: "Vídeo Tutorial",
  },
];

export type { VideoItem };
