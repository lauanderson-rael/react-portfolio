import { useState, useEffect } from "react";
import { Container, SessaoFormulario } from "./styles";

type Post = {
   _id: string;
   titulo: string;
   descricao: string;
   imgUrl: string;
   alt: string;
   link: string;
};

export default function Blog() {
   const [post, setPost] = useState<Post[]>([]);
   const [loading, setLoading] = useState(true);
   const [searchTerm, setSearchTerm] = useState("");

   const postsRev = post.slice().reverse();

   // Filtro baseado no título
   const filteredPosts = postsRev.filter((item) =>
      item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
   );

   // Carregamento inicial dos dados
   useEffect(() => {
      async function loadApi() {
         const api = import.meta.env.VITE_API_URL + "/posts";
         const res = await fetch(api);
         const json = await res.json();
         setPost(json);
         setLoading(false);
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
                        margin: '4px 0',
                        borderRadius: "6px",
                        border: "1px solid #ccc",
                        width: '256px',
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
                        <article key={item._id}>
                           <img src={item.imgUrl} alt={item.titulo} />
                           <div className="content">
                              <h2>{item.titulo}</h2>
                              <p>{item.descricao}</p>
                           </div>
                           <div style={{ marginTop: "5px" }}>
                              <strong>Categoria: </strong> <span>Tecnologia</span>
                           </div>
                           <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
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

               <form
                  action="mailto:lauanderson38@gmail.com"
                  method="POST"
                  encType="text/plain"
               >
                  <input
                     type="text"
                     placeholder="Seu nome completo"
                     required
                  />
                  <input
                     type="text"
                     placeholder="Seu e-mail"
                     required
                  />
                  <input type="text" placeholder="Seu celular" />
                  <textarea placeholder="Sua mensagem"></textarea>

                  <div className="btn-enviar">
                     <input type="submit" value="ENVIAR" />
                     <input type="reset" value="LIMPAR" />
                  </div>
               </form>
            </div>
         </SessaoFormulario>
      </>
   );
}
