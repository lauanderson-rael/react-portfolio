import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'
import p9 from '../../assets/p9.png'




export const projetos = [
    {
      image: p1,
      title: "Site de Zebras de Futebol",
      description: "Nesse projeto criei o Front end de um site de apostas esportivas. Pude colocar em prática muitos de meus conhecimentos em Desiner Responsivo",
      projectLink: "https://templates-zebras.vercel.app/home/index.html",
      repoLink: "https://github.com/lauanderson-rael/templates-zebras",
      technologies: ["html", "CSS", "JavaScript"],
      category: "frontend",
    },
    {
      image: p7,
      title: "SindAdmin",
      description: "Sistema Node.js que automatiza a geração de documentos sindicais em formato .docx e .pdf. Possue autenticação JWT. \nuser: admin , password: admin",
      projectLink: "https://criminal-elizabet-free-deploys-1136aadf.koyeb.app/",
      repoLink: "https://github.com/lauanderson-rael/node-app-sind-admin",
      technologies: ["ExpressJS", "TailwindCSS"],
      category: "fullStack",
    },
    {
      image: p2,
      title: "Lista de Heróis",
      description: "Nesse projeto fiz o consumo de uma Api Rest, realizei requisições GET com Axios e também adicionei algumas funcionalidades como as opções de listagem e filtragem.",
      projectLink: "https://react-list-heroes-chi.vercel.app/",
      repoLink: "https://github.com/lauanderson-rael/react-list-heroes",
      technologies: ["React", "CSS"],
      category: "frontend",
    },
    {
      image: p5,
      title: "Blog de Emagrecimento",
      description: "Blog em React consumindo dados de API. Nesse projeto criei um blog básico utilizando react e consumindo dados de uma api com fetch. Os estilos do projeto foram com css puro.",
      projectLink: "https://react-blog-puce-nine.vercel.app/",
      repoLink: "https://github.com/lauanderson-rael/react-blog",
      technologies: ["react", "Styled-Components"],
      category: "frontend",
    },
    {
      image: p3,
      title: "Sistema de estoque",
      description: "Nesse projeto desenvolvi um Sistema de Estoque, aplicacao full Stack com padrão MVC. Para as views utulizei handlebars e no ORM utilizei sequelize facilitando a manipulação do Banco de dados.",
      projectLink: "https://mvcestoque-production.up.railway.app/",
      repoLink: "https://github.com/lau-ifma/mvc_estoque",
      technologies: ["Handlebars", "Express","MySQL", "Bootstrap"],
      category: "fullStack",
    },
    {
      image: p4,
      title: "Repositorios Favoritos",
      description: "Sistema para salvar os meu repositorios favoritos do github, podendo tambem visualizar algumas informações coma as issues.",
      projectLink: "https://react-repositorios-fav.vercel.app/",
      repoLink: "https://github.com/lauanderson-rael/react-repositorios-Fav",
      technologies: ["react", "Styled-Components"],
      category: "frontend",
    },
    {
      image: p6,
      title: "Dev Motors",
      description: "Site para a Dev Motors, uma empresa fictícia de manutenção de carros. Para a API backend, utilizei o Cosmic como headless CMS, permitindo o gerenciamento dinâmico e eficiente dos conteúdos.",
      projectLink: "https://next-dev-motors.vercel.app/",
      repoLink: "https://github.com/lauanderson-rael/next-devMotors",
      technologies: ["NextJS", "Sass", "CosmicJS"],
      category: "fullStack",
    },
    {
      image: p8,
      title: "Figma - Pré-IFMA",
      description: "Prótotipo do Pré-IFMA. Uma aplicação que estou desenvolvendo em grupo utilizando metodologias ágeis como Scrum e kanban. Esse projeto faz parte de um trabalho da disciplina 'Engenharia de Software I'. ",
      projectLink: "https://www.figma.com/design/MYT7Ix1igipVti23Ch3HUW/Prototipo-Eng.Software?node-id=0-1&p=f",
      repoLink: "https://www.figma.com/design/MYT7Ix1igipVti23Ch3HUW/Prototipo-Eng.Software?node-id=0-1&p=f",
      technologies: ["Figma"],
      category: "design",
    },
    {
      image: p9,
      title: "Autenticação JWT em uma API utilizando Express.JS",
      description: "Implementação básica de autenticação JWT em uma API utilizando Express.JS",
      projectLink: "https://github.com/lauanderson-rael/node-jwt-auth",
      repoLink: "https://github.com/lauanderson-rael/node-jwt-auth",
      technologies: ["nodeJS", "JsonWebToken", "Express"],
      category: "backend",
    },
    
  ];


   export const contagemPorCategoria = projetos.reduce((acc, projeto) => {
      acc[projeto.category] = (acc[projeto.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
    contagemPorCategoria["todos"] = projetos.length;