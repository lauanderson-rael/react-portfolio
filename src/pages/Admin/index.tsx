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
      <Main>
        <h2>Adicionar Novo Post</h2>
        <article>
            <h3>1 - Primeiro adicione a foto e clique em "enviar imagem"</h3>

              <ImageUpload/>

            <h3>2 - adicione o "id" do post,preencha os dados e clique em "atualizar"</h3>


          <form className='form-new' onSubmit={handleSubmit}>

            <label htmlFor="">ID </label>
            <input
              type="text"
              name="_id"
              placeholder="ID do recurso"
              value={updateData._id}
              onChange={handleChange}
              required
            />

            <label htmlFor="">Titulo</label>
            <input
              type="text"
              name="titulo"
              placeholder="Título"
              value={updateData.titulo}
              onChange={handleChange}
              required
            />
            <label htmlFor="">Descrição</label>
            <textarea
              name="descricao"
              placeholder="Descrição"
              value={updateData.descricao}
              onChange={handleChange}
              required
            />

            <label htmlFor="">texto alt para imagem</label>
            <input
              type="text"
              name="alt"
              placeholder="Texto alternativo"
              value={updateData.alt}
              onChange={handleChange}
              required
            />

            <label htmlFor="">Url do post</label>
            <input
              type="text"
              name="link"
              placeholder="Link"
              value={updateData.link}
              onChange={handleChange}
              required
            />

            <button style={{height: '35px', marginTop: '10px'}} className='submit' type="submit">Atualizar</button>
          </form>

        </article>

        <PostList posts={posts} fetchPosts={fetchPosts} />
      </Main>
    </Container>
  );
};

export default AppAdm;
