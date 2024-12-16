import React from 'react';
import PostItem from '../PostItem/index';
import { GridLayout } from './styles';

interface Post {
  _id: string;
  titulo: string;
  descricao: string;
  imgUrl: string;
  alt: string;
  link: string;
}

interface PostListProps {
  posts: Post[];
  fetchPosts: () => void;
}

const PostList: React.FC<PostListProps> = ({ posts, fetchPosts }) => {
  return (
    <div>
      <GridLayout>
        <h3>Lista de Posts - quantidade atual: {posts.length}</h3>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} fetchPosts={fetchPosts} />
        ))}

      </GridLayout>
    </div>
  );
};

export default PostList;
