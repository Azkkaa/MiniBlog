import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingState from '@/componets/LoadingState.jsx';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/post/${id}`)
    .then((res) => {
        setPost(res.data.resources);
    })
    .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
      <div className='bg-white text-gray-900'>
        <header className='mt-10 p-7'>
            <h1 className='text-[26px] font-bold underline underline-offset-2'>Post Page</h1>
        </header>

        <div>
          {post ? (
              <>
                <div key={post.id} className='p-5 border-t border-gray-500'>
                  <h2 className='text-3xl font-bold'>{post.title}</h2>

                  <p className='my-4 font-semibold'>
                      {post.content}
                  </p>

                  <div className='flex justify-between font-semibold text-[15px] text-gray-600'>
                    <p>
                      Author : 
                      <Link to={`/author/${post.relations.user.id}/posts`} className='text-blue-600 hover:underline ml-2'>{post.relations.user.name}</Link>
                    </p>
                    <p>
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
