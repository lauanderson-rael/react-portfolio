import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
type Post = {
    id: string;
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

  const api = 'https://backend-instabytes-776727787744.southamerica-east1.run.app'


  return (
    <>
    <Container>
      <div className="container">
        <header>
          <h2>LauBlog</h2>
        </header>

        <main style={{flex: 1}}>

        {nutri.map((item) => {
          return (
            <article key={item.id}>
              <h2>{item.titulo}</h2>
              <img src={`${api}/${item.id}.png`} alt={item.titulo} />
              <p>{item.descricao}</p>
              <span> link: <strong>{item.link}</strong></span>
              <button>Acessar</button>
            </article>
          )
        })}

        <Link to='/sobre'>Sobre</Link>

        </main>
        <footer>
          <p>2024 - Criado por <a href="https://lauanderson-portfolio.vercel.app/" target="blank">Lauanderson Rael</a></p>
          <p><a href="mailto:hege@example.com">lauanderson38@gmail.com</a></p>
        </footer>
      </div>
      </Container>

    </>
  )
 }
