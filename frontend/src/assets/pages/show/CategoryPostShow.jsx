import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Text from '@/utils/Text.js';
import LoadingState from '@/components/LoadingState.jsx';
import Pagination from '@/components/Pagination.jsx';
import ErrorPage from '@/pages/errors/error.jsx';

const CategoryShow = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams()
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);
  const page = parseInt(searchParams.get('page')) || 1
  const route = !page ? `http://localhost:8000/api/category/${category}/post` : `http://localhost:8000/api/category/${category}/post?page=${page}`;
  const totalCategoryPosts = data?.total || '-';

  useEffect(() => {
    posts.length > 0 && setPosts([])

    axios.get(route)
    .then((res) => {
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
                  <h1 className='text-xl md:text-[26px] font-bold '>Category : <span className='underline'>{Text.prototype.ucfirst(category)}</span></h1>
                  <p className='text-[12px] md:text-base italic font-medium text-gray-500 mt-2'>Category <span className='underline text-gray-700'>{Text.prototype.ucfirst(category)}</span> has <span className='font-bold text-gray-700'>{totalCategoryPosts}</span> Post</p>
              </header>

              <div>
                  {posts.length > 0 ? (
                    <>
                      <div>
                        {posts.map((post) => (
                          <div key={post.id} className='p-3 md:p-5 border-t border-gray-500'>
                              <h2 className='text-lg md:text-xl font-semibold'>{post.title}</h2>

                              <p className='mt-1 font-semibold text-sm md:text-base'>
                                  {post.content}
                                  <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-2'>Read More</Link>
                              </p>

                              <p className='mt-3 font-semibold text-[12px] md:text-base text-gray-600'>
                                Author : <Link to={`/author/${post.user.id}/posts`} className='text-blue-600 hover:underline ml-1'>{post.user.name}</Link>
                              </p>
                          </div>
                        ))}
                      </div>

                      <div className='h-5 w-full bg-gray-200'/>

                      <Pagination currentPage={page} totalPages={Math.ceil(totalCategoryPosts / 10)} route={`/category/${category}/posts`} />
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

export default CategoryShow;
