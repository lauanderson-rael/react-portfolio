import { useState, useEffect } from "react";
import { Container, SessaoFormulario } from "./styles";
import { MdOutlineImageSearch } from "react-icons/md";
type Post = {
  _id: string;
  titulo: string;
  descricao: string;
  imgUrl: string;
  alt: string;
  link: string;
};


export default function Blog() {
  const [post, setPost] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const postsRev = post.slice().reverse();

  // ao renderizar a pagina sera chamada a funcao (obs: --> vazio [])
  useEffect(() => {
    function loadApi() {
      const api = import.meta.env.VITE_API_URL + '/posts'
      fetch(api)
        .then((res) => res.json())
        .then((json) => {
          //console.log("dados da API:",json)
          setPost(json)
          setLoading(false)
        })

    }
    loadApi()

  }, [])


  if (loading) {
    return (
      <Container>
        <h1 style={{ height: '60vh', display: 'grid', placeItems: 'center', color: ' var(--text-color)' }}>Carregando ...</h1>
      </Container>
    )
  }



  return (
    <>
      <Container>
        <div className="container">
          <header>
            <h3>Últimas Postagens</h3>
            <MdOutlineImageSearch />
          </header>

          <main style={{ flex: 1 }}>

            {postsRev.map((item) => {
              return (
                <article key={item._id}>
                  <div>
                    <h2>{item.titulo}</h2>
                    <img src={item.imgUrl} alt={item.titulo} />
                    <p>{item.descricao}</p>

                  </div>

                  <div style={{ marginTop: '5px' }}>
                    <strong>Categoria: </strong> <span>Tecnologia</span>
                  </div>

                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button> Ler mais</button>
                  </a>
                </article>
              )
            })}

          </main>
        </div>
        <p style={{ fontSize: '12px', color: 'gray', textAlign: 'justify', padding: '10px', width: '90%', margin: '0 auto' }}>
          As imagens e descrições exibidas neste blog são de terceiros e pertencem aos respectivos autores. Ao clicar nos links, você será redirecionado para o site original, onde pode encontrar o conteúdo completo. Todos os direitos reservados aos autores.
        </p>

        <br />
      </Container>

      <SessaoFormulario>
        
        <div>
          <h2 className="titulo">
            Faça sua <span> Pergunta</span>
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

    </>
  )
}
