import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import PostList from '../../components/PostList/index';
import { Container, Main, Sidebar, Content } from './styles';
import ImageUpload from '../../components/UploadImage/index';
import Logout from '../../components/Logout';

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imgUrl: string;
  alt: string;
  link: string;
}

interface UpdateData {
  _id: string;
  titulo: string;
  descricao: string;
  alt: string;
  link: string;
}

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
      const token = localStorage.getItem('token');
      const response = await axios.put(`${api}/${updateData._id}`, updateData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log('Dados atualizados com sucesso:', response.data);
      alert('Dados atualizados com sucesso! :)');
      await fetchPosts(); // atualizar na tela
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
      alert('Erro ao atualizar os dados :(');
    }
  };

  const [posts, setPosts] = useState<Post[]>([]);

  // Função para buscar os posts no banco
  const fetchPosts = async () => {
    try {
      const api = import.meta.env.VITE_API_URL + '/posts';
      const response = await axios.get<Post[]>(api); // URL da sua API
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Estado para controlar qual conteúdo será exibido
  const [selectedContent, setSelectedContent] = useState<'form' | 'posts'>('form');

  // Função para alterar o conteúdo exibido
  const handleNavigation = (content: 'form' | 'posts') => {
    setSelectedContent(content);
  };

  return (
    <Container>
      <Sidebar>
        <nav>
          <h3 style={{color: 'var(--text-color2)'}}>Painel Blog</h3>
          <ul>
            <li>
              <a href="#" onClick={() => handleNavigation('form')}
                className={selectedContent === 'form' ? 'active' : ''}>
                Adicionar Post
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavigation('posts')}
                 className={selectedContent === 'posts' ? 'active' : ''}>
                Postagens
              </a>
            </li>
            <li><Logout/></li>
          </ul>
        </nav>
      </Sidebar>

      <Main>
        <Content>
          {selectedContent === 'form' ? (
            <article>
              <h3>Envie a imagem do novo post</h3>
              <div className="caixa">
                <ImageUpload />
              </div>

              <h3>Preencha os dados do novo post ou atualize um existente</h3>
              <div className="caixa">
                <form className="form-new" onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="_id"
                    placeholder="ID do post"
                    value={updateData._id}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="titulo"
                    placeholder="Título para o post"
                    value={updateData.titulo}
                    onChange={handleChange}

                  />
                  <textarea
                    name="descricao"
                    placeholder="Descrição para o post"
                    value={updateData.descricao}
                    onChange={handleChange}

                  />

                  <div className='flex-items'>
                    <input
                      type="text"
                      name="alt"
                      placeholder="Texto alternativo para a imagem"
                      value={updateData.alt}
                      onChange={handleChange}

                    />
                    <input
                      type="text"
                      name="link"
                      placeholder="Link para o post completo"
                      value={updateData.link}
                      onChange={handleChange}

                    />
                  </div>


                  <button type="submit" className="submit">Atualizar</button>
                </form>
              </div>
            </article>
          ) : (
            <div className="lista">
              <PostList posts={posts} fetchPosts={fetchPosts} />

            </div>
          )}

          <div className="lista-mobile">
              <PostList posts={posts} fetchPosts={fetchPosts} />
          </div>
        </Content>
      </Main>
    </Container>
  );
};

export default AppAdm;
