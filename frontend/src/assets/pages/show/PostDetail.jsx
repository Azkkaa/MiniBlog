import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorPage from '@/pages/errors/error.jsx';
import LoadingState from '@/components/LoadingState.jsx';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/post/${id}`)
    .then((res) => {
        setPost(res.data.resources);
        setResponse(res.data);
    })
    .catch((err) => {
        setError(true);
        setResponse(err.response);
      })
  }, []);

  if (error) {
    return <ErrorPage code={response.status} message={response.data.message} />
  }

  return (
    <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
      <div className='bg-white text-gray-900'>
        <header className='mt-5 md:mt-10 p-3 md:p-7'>
            <h1 className='text-2xl md:text-[26px] font-bold underline underline-offset-2'>Post Detail</h1>
        </header>

        <div>
          {post ? (
              <>
                <div key={post.id} className='p-3 md:p-5 border-t border-gray-500'>
                  <h2 className='text-xl md:text-2xl font-bold'>{post.title}</h2>

                  <p className='my-2 md:my-4 font-semibold text-sm md:text-base text-justify'>
                      {post.content}
                  </p>

                  <div className='flex flex-col md:flex-row justify-between font-semibold text-sm md:text-base text-gray-600 mt-3'>
                    <p>
                      Author : 
                      <Link to={`/author/${post.relations.user.id}/posts`} className='text-blue-600 hover:underline ml-2'>{post.relations.user.name}</Link>
                    </p>
                    <p className='mr-4'>
                      Category : 
                      <Link to={`/category/${post.relations.category.slug}/posts`} className='text-blue-600 hover:underline ml-2'>{post.relations.category.name}</Link>
                    </p>
                  </div>
                </div>
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

export default PostDetail;
