import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@/components/Pagination.jsx'
import LoadingState from '@/components/LoadingState.jsx';
import Text from '@/utils/Text.js';
import ErrorPage from '@/pages/errors/error.jsx';

const AuthorShow = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState('-');
  const [searchParams] = useSearchParams()
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const page = parseInt(searchParams.get('page')) || 1
  const route = !page ? `http://localhost:8000/api/author/${id}/post` : `http://localhost:8000/api/author/${id}/post?page=${page}`;
  const totalAuthorPosts = data?.total || '-';

  useEffect(() => {
    posts.length > 0 && setPosts([])

    axios.get(route)
      .then((res) => {
          setAuthor(res.data.resources.name);
          setPosts(res.data.resources.posts);
          setData(res.data);
      })
      .catch((err) => {
          setError(true);
          setResponse(err.response);
      })
  }, [page]);

  if (error) {
    return <ErrorPage code={response.status} message={response.data.message} />
  }

  return (
      <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
          <div className='bg-white text-gray-900'>
              <header className='mt-5 md:mt-10 py-3 md:py-7 flex flex-col items-center'>
                  <h1 className='text-xl md:text-[26px] font-bold '>Author : <span className='underline'>{author}</span></h1>
                  <p className='text-[12px] md:text-base italic font-medium text-gray-500 mt-2'>Author <span className='underline text-gray-700'>{author}</span> has <span className='font-bold text-gray-700'>{totalAuthorPosts}</span> Post</p>
              </header>

              <div>
                  {posts.length > 0 ? (
                      <>
                        {posts.map((post) => (
                          <div key={post.id} className='p-3 md:p-5 border-t border-gray-500'>
                              <h2 className='text-lg md:text-xl font-semibold'>{post.title}</h2>

                              <p className='mt-1 font-semibold text-sm md:text-base'>
                                {Text.prototype.limitText(post.content, 130)}
                                <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-2'>Read More</Link>
                              </p>

                              <p className='mt-3 font-semibold text-[12px] md:text-base text-gray-600'>
                                Category : <Link to={`/category/${post.category.slug}/posts`} className='text-blue-600 hover:underline ml-1'>{post.category.name}</Link>
                              </p>
                          </div>
                        ))}

                        <div className='h-5 w-full bg-gray-200'/>

                        <Pagination currentPage={page} totalPages={Math.ceil(totalAuthorPosts / 10)} route={`/author/${id}/posts`} />
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
