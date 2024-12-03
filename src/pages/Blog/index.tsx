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

  // ao renderizar a pagina sera chamada a funcao (obs: --> vazio [])
  useEffect(() => {
    function loadApi(){
      const api = '/api'
      fetch(api)
      .then((res) => res.json())
      .then((json) => {
        console.log("dados da API:",json)
        setNutri(json)
      })

    }
    loadApi()
  }, [])

  
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
              <img src={`https://backend-instabytes-776727787744.southamerica-east1.run.app/${item._id}.png`} alt={item.titulo} />
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
