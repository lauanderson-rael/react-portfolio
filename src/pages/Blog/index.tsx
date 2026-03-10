import { useState, useEffect } from "react";
import { Container, SessaoFormulario } from "./styles";

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string[];
};

export default function Blog() {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, celular, mensagem } = formData;
    const subject = `Pergunta de ${nome}`;
    const body = `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\nMensagem:\n${mensagem}`;
    window.location.href = `mailto:lauanderson38@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({ nome: "", email: "", celular: "", mensagem: "" });
  };

  const postsRev = post; // CurrentsAPI returns sorted by date usually

  // Filtro baseado no título
  const filteredPosts = postsRev.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Carregamento inicial dos dados
 useEffect(() => {
  async function loadApi() {
    const apiKey = import.meta.env.VITE_CURRENTS_API_KEY;

    const keywords = encodeURIComponent(
      "programação OR tecnologia OR inteligência artificial OR IA"
    );

    const url = `https://api.currentsapi.services/v1/search?keywords=${keywords}&language=pt&country=BR&category=technology`;

    try {
      const res = await fetch(url, {
        headers: {
          Authorization: apiKey
        }
      });

      const data = await res.json();

      if (data.status === "ok") {
        setPost(data.news);
      } else {
        console.error("Erro na API:", data);
      }
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    } finally {
      setLoading(false);
    }
  }

  loadApi();
}, []);

  if (loading) {
    return (
      <Container>
        <h1
          style={{
            height: "60vh",
            display: "grid",
            placeItems: "center",
            color: "var(--text-color)",
          }}
        >
          Carregando ...
        </h1>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <div className="container">
          {/* HEADER COM BUSCA */}
          <header>
            <div>
              <h3>LauBlog</h3>
            </div>

            <input
              type="text"
              placeholder="Buscar por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "4px 12px",
                margin: "4px 0",
                borderRadius: "6px",
                border: "1px solid #ccc",
                width: "256px",
                outline: "none",
                minWidth: "200px",
                fontSize: "0.9rem",
                marginLeft: "10px",
              }}
            />
          </header>

          {/* LISTAGEM DOS POSTS */}
          <main style={{ flex: 1 }}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item) => (
                <article key={item.id}>
                  <img src={item.image !== "None" ? item.image : "https://via.placeholder.com/400x200?text=No+Image"} alt={item.title} />
                  <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div style={{ marginTop: "5px" }}>
                    <strong>Categoria: </strong> <span>{item.category.join(", ") || "Tecnologia"}</span>
                  </div>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <button> Ler mais</button>
                  </a>
                </article>
              ))
            ) : (
              <p
                style={{
                  color: "gray",
                  fontStyle: "italic",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                Nenhum post encontrado com esse título.
              </p>
            )}
          </main>
        </div>

        {/* AVISO LEGAL */}
        <p
          style={{
            fontSize: "12px",
            color: "gray",
            textAlign: "justify",
            padding: "10px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          As imagens e descrições exibidas neste blog são de terceiros e
          pertencem aos respectivos autores. Ao clicar nos links, você será
          redirecionado para o site original, onde pode encontrar o conteúdo
          completo. Todos os direitos reservados aos autores.
        </p>
        <br />
      </Container>

      {/* FORMULÁRIO DE CONTATO */}
      <SessaoFormulario>
        <div>
          <h2 className="titulo">
            Faça sua <span>Pergunta</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Seu nome completo" 
              value={formData.nome}
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
              required 
            />
            <input 
              type="text" 
              placeholder="Seu e-mail" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
            <input 
              type="text" 
              placeholder="Seu celular" 
              value={formData.celular}
              onChange={(e) => setFormData({...formData, celular: e.target.value})}
            />
            <textarea 
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
            ></textarea>

            <div className="btn-enviar">
              <input type="submit" value="ENVIAR" />
              <input type="button" value="LIMPAR" onClick={handleReset} />
            </div>
          </form>
        </div>
      </SessaoFormulario>
    </>
  );
}