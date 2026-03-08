import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import LoadingState from '@/componets/LoadingState.jsx';
import Pagination from '@/componets/Pagination.jsx';

function PostList () {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page')) || 1
  const route = !page ? 'http://localhost:8000/api/post' : `http://localhost:8000/api/post?page=${page}`;

  useEffect(() => {
    posts.length > 0 && setPosts([])

    axios.get(route)
    .then((res) => {
        setPosts(res.data.resources);
        setData(res.data);
      })
      .catch((err) => {
          console.log(err);
      })
  }, [page]);

  return (
    <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
      <div className='bg-white text-gray-900'>
        <header className='mt-10 p-7'>
          <h1 className='text-[26px] font-bold underline underline-offset-2'>Post Page</h1>
        </header>

        <div>
          {posts.length > 0 ? (
            <>
              {/* Post List */}
              {posts.map((post) => (
                <div key={post.id} className='p-5 border-t border-gray-500'>
                  <h2 className='text-xl font-bold'>{post.title}</h2>

                  <p className='mt-1 font-semibold'>
                    {post.content}
                    <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-1'>Read More</Link>
                  </p>

                  <div className='mt-3 flex justify-between font-semibold text-[15px] text-gray-600'>
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
              <Pagination currentPage={page} totalPages={Math.floor(data.total / 10)} />
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