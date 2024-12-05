import { useState, useEffect } from "react";
import { Container } from "./styles";
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
      const api = import.meta.env.VITE_API_URL
      fetch(api)
      .then((res) => res.json())
      .then((json) => {
        console.log("dados da API:",json)
        setNutri(json)
        setLoading(false)
      })

    }
    loadApi()
  }, [])


  if (loading){
    return(
       <Container>
            <h1 style={{color: "white", height: '60vh', display: 'grid', placeItems: 'center'}}>Carregando ...</h1>
       </Container>
    )
  }



  return (
    <>
    <Container>
      <div className="container">
        <header>
          <h2>Posts</h2>
        </header>

        <main style={{flex: 1}}>

        {nutri.map((item) => {
          return (
            <article key={item._id}>
              <h2>{item.titulo}</h2>
              <img src={item.imgUrl} alt={item.titulo} />
              <p>{item.descricao}</p>

              <a href={item.link}  target="_blank" rel="noopener noreferrer">
                <button> Ler mais</button>
              </a>
            </article>
          )
        })}

        </main>
      </div>
      </Container>

    </>
  )
 }
