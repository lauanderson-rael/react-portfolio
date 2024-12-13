import React, { useState, useEffect,  ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import PostList from '../../components/PostList/index';
import { Container, Main} from './styles';
import ImageUpload from '../../components/UploadImage/index';

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imgUrl: string;
  alt: string;
  link: string;
}
// new
interface UpdateData {
  _id: string;
  titulo: string;
  descricao: string;
  alt: string;
  link: string;
}
// end

const AppAdm: React.FC = () => {

  // inicio new
  const [updateData, setUpdateData] = useState<UpdateData>({
    _id: '',
    titulo: '',
    descricao: '',
    alt: '',
    link: '',
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdateData({ ...updateData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!updateData._id) {
      console.error('ID do recurso ausente');
      return;
    }
  
    try {
      const api = import.meta.env.VITE_API_URL + '/upload'
      const response = await axios.put(`${api}/${updateData._id}`, updateData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Dados atualizados com sucesso:', response.data);
      alert('Dados atualizados com sucesso! :)')
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      alert('Erro ao atualizar os dados :(');
    }
  };

  //fim


  const [posts, setPosts] = useState<Post[]>([]);

  // Função para buscar os posts no banco
  const fetchPosts = async () => {
    try {
      const api = import.meta.env.VITE_API_URL + '/posts'
      const response = await axios.get<Post[]>(api); // URL da sua API
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
  
    <Container>
      <header>Gerenciamento dos Posts</header>

      <Main>
        <h2>Adicionar Novo Post</h2>
        <article>
        <strong>1 - Primeiro adicione a foto e clique em "enviar imagem"</strong>
        <ImageUpload/>
        <br />

        <strong>2 - adicione o "id" do post,preencha os dados e clique em "atualizar"</strong>
        <div>
          <form onSubmit={handleSubmit} style={{display: 'block'}}>
          <input
            type="text"
            name="_id"
            placeholder="ID do recurso"
            value={updateData._id}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="titulo"
            placeholder="Título"
            value={updateData.titulo}
            onChange={handleChange}
            required
          /> <br />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={updateData.descricao}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="alt"
            placeholder="Texto alternativo"
            value={updateData.alt}
            onChange={handleChange}
            required
          />
          <br />

          <input
            type="text"
            name="link"
            placeholder="Link"
            value={updateData.link}
            onChange={handleChange}
            required
          />
          <br />
          <button style={{background: 'green', padding: '2px 3px', color: '#fff', marginTop: '5px'}}  type="submit">Atualizar</button>
          </form>
        </div>
        </article>

        <PostList posts={posts} fetchPosts={fetchPosts} />
      </Main>
    </Container>
  );
};

export default AppAdm;
