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
      <h2 style={{marginTop: '50px'}}>Lista de Posts</h2>
      <GridLayout>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} fetchPosts={fetchPosts} />
        ))}

      </GridLayout>
    </div>
  );
};

export default PostList;
