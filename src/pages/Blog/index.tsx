import { useState, useEffect } from "react";
import { Container } from "./styles";
import { MdOutlineImageSearch } from "react-icons/md";
type Post = {
    _id: string;
    titulo: string;
    descricao: string;
    imgUrl: string;
    alt: string;
    link: string;
  };


 export default function Blog(){
    const [nutri, setNutri] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

  // ao renderizar a pagina sera chamada a funcao (obs: --> vazio [])
  useEffect(() => {
    function loadApi(){
      const api = import.meta.env.VITE_API_URL + '/posts'
      fetch(api)
      .then((res) => res.json())
      .then((json) => {
        //console.log("dados da API:",json)
        setNutri(json)
        setLoading(false)
      })

    }
    loadApi()

  }, [])


  if (loading){
    return(
       <Container>
            <h1 style={{ height: '60vh', display: 'grid', placeItems: 'center', color: ' var(--text-color)'}}>Carregando ...</h1>
       </Container>
    )
  }



  return (
    <>
    <Container>

      <div className="container">
        <header>
          <h3>Postagens</h3>
          <MdOutlineImageSearch/>
        </header>

        <main style={{flex: 1}}>

        {nutri.map((item) => {
          return (
            <article key={item._id}>
              <div>
                <h2>{item.titulo}</h2>
                <img src={item.imgUrl} alt={item.titulo} />
                <p>{item.descricao}</p>

              </div>

              <a href={item.link}  target="_blank" rel="noopener noreferrer">
                <button> Ler mais</button>
              </a>
            </article>
          )
        })}

        </main>
      </div>
        <p style={{ fontSize: '12px', color: 'gray', textAlign: 'justify', padding: '10px'}}>
            As imagens e descrições exibidas neste blog são de terceiros e pertencem aos respectivos autores. Ao clicar nos links, você será redirecionado para o site original, onde pode encontrar o conteúdo completo. Todos os direitos reservados aos autores.
        </p>

        <br />
      </Container>

    </>
  )
 }
