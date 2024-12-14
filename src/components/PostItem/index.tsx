import React from 'react';
import axios from 'axios';
import { ContainerPost } from './styles';


interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imgUrl: string;
  alt: string;
  link: string;
}

interface PostItemProps {
  post: Post;
  fetchPosts: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, fetchPosts }) => {
  const deletePost = async (id: string) => {
    try {
      const api = import.meta.env.VITE_API_URL + '/delete'
      const token = localStorage.getItem('token');
      await axios.delete(`${api}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });
      fetchPosts(); // Atualizar a lista após deletar
      alert('Post deletado com sucesso! :)')
    } catch (error) {
      console.error('Erro ao deletar o post', error);
      alert('Erro ao deletar o post :(');
    }
  };

  return (
    <ContainerPost>
      <div className='caixa'>
        <img src={post.imgUrl} alt={post.alt} />
        <button style={{background: 'red'}} onClick={() => deletePost(post._id)}>Deletar</button>
      </div>
      <div>
        <h4><b>ID: </b> {post._id}</h4>
        <p><b>Titulo: </b> {post.titulo}</p>
        <p><b>Descricao: </b>{post.descricao}</p>
        <p><b>Alt: </b>{post.alt}</p>
        <p>
          <b>Link: </b>
          <a href={post.link} target="_blank" rel="noopener noreferrer">{post.link}</a>
        </p>

      </div>
    </ContainerPost>
  );
};

export default PostItem;
