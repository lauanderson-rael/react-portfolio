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
      await axios.delete(`${api}/${id}`);
      fetchPosts(); // Atualizar a lista após deletar
    } catch (error) {
      console.error('Erro ao deletar o post', error);
    }
  };

  return (
    <ContainerPost>
      <div>
        <img src={post.imgUrl} alt={post.alt} />
      </div>
      <div>
        <strong>ID: {post._id}</strong> <br />
        <b>{post.titulo}</b>
        <p>{post.descricao}</p>
      
        <a href={post.link} target="_blank" rel="noopener noreferrer">Leia mais</a>
        
        <button onClick={() => deletePost(post._id)}>Deletar</button>
      </div>
    </ContainerPost>
  );
};

export default PostItem;
