import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import LoadingState from '@/components/LoadingState.jsx';
import Pagination from '@/components/Pagination.jsx';
import ErrorPage from '@/pages/errors/error.jsx';

function PostList () {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page')) || 1;
  const route = !page ? 'http://localhost:8000/api/post' : `http://localhost:8000/api/post?page=${page}`;
  const totalPosts = data?.total || '-';

  const gettingData = () => {
    axios.get(route)
    .then((res) => {
      setPosts(res.data.resources);
      setData(res.data);
    })
    .catch((err) => {
      setData(err.response.data);
      setError(true);
    })
  }

  useEffect(() => {
    posts.length > 0 && setPosts([]);

    gettingData();
  }, [page]);

  if (error) {
    return (
      <ErrorPage code={data.code} message={data.message} />
    )
  }

  return (
    <div className='pt-[65px] bg-gray-200 min-h-screen px-3 md:px-5 md:pb-10 pb-5'>
      <div className='bg-white text-gray-900'>
        <header className='mt-5 md:mt-10 p-3 md:p-7 flex justify-between items-center'>
          <div>
            <h1 className='text-xl md:text-[26px] font-bold underline underline-offset-2'>Post Page</h1>
            <p className='text-[12px] md:text-base italic font-medium text-gray-500'>Total of <span className='font-bold text-gray-700'>{totalPosts}</span> Post</p>
          </div>
        </header>

        <div>
          {posts.length > 0 ? (
            <>
              {/* Post List */}
              {posts.map((post) => (
                <div key={post.id} className='p-3 md:p-5 border-t border-gray-500'>
                  <h2 className='text-lg md:text-xl font-bold'>{post.title}</h2>

                  <p className='mt-1 text-sm md:text-base font-semibold'>
                    {post.content}
                    <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-1'>Read More</Link>
                  </p>

                  <div className='mt-3 flex flex-col md:flex-row justify-between font-semibold text-[12px] md:text-base text-gray-600'>
                    <p>Author :
                      <Link to={`/author/${post.relations.user.id}/posts`} className='text-blue-600 hover:underline ml-1'>{post.relations.user.name}</Link>
                    </p>
                    <p>
                      Category :
                      <Link to={`/category/${post.relations.category.slug}/posts`} className='text-blue-600 hover:underline mx-1'>{post.relations.category.name}</Link>
                    </p>
                  </div>
                </div>
              ))}

              <div className='h-5 w-full bg-gray-200'/>

              {/* Pagination */}
              <Pagination currentPage={page} totalPages={Math.ceil(data.total / 10)} route="/posts"/>
            </>
            ) : (
              <LoadingState />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PostList;