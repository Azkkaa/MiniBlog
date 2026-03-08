import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingState from '@/componets/LoadingState.jsx';
import Text from '@/utils/Text.js';

const AuthorShow = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [author, setAuthor] = useState('');

  useEffect(() => {
      axios.get(`http://localhost:8000/api/author/${id}/post`)
      .then((res) => {
          setAuthor(res.data.resources.name);
          setPosts(res.data.resources.posts);
      })
      .catch((err) => {
          console.log(err);
      })
  }, []);

  return (
      <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
          <div className='bg-white text-gray-900'>
              <header className='mt-10 p-7'>
                  <h1 className='text-[26px] font-bold underline underline-offset-2'>Author : {author}</h1>
              </header>

              <div>
                  {posts ? (
                      <>
                        {posts.map((post) => (
                          <div key={post.id} className='p-5 border-t border-gray-500'>
                              <h2 className='text-lg font-semibold'>{post.title}</h2>

                              <p className='text-gray-600 mt-2'>
                                {Text.prototype.limitText(post.content, 130)}
                                <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-2'>Read More</Link>
                              </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <LoadingState />
                    )
                  }
              </div>
          </div>
      </div>
  );
};

export default AuthorShow;
