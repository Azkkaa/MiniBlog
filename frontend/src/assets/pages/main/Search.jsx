import { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingState from '@/components/LoadingState.jsx'

function showData(posts) {
  if (posts.length > 0) {
    return (
      <>
        <div>
          {posts.map((post) => (
            <div key={post.id} className='p-5 border-t border-gray-500'>
                <h2 className='text-lg font-semibold'>{post.title}</h2>

                <p className='mt-1 font-semibold'>
                    {post.content}
                    <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-2'>Read More</Link>
                </p>

                <p className='mt-3 font-semibold text-[15px] text-gray-600'>
                  Author : <Link to={`/author/${post.relations.user.id}/posts`} className='text-blue-600 hover:underline ml-1'>{post.relations.user.name}</Link>
                </p>
            </div>
          ))}
        </div>
      </>
    )
  } else {
    return (
      <LoadingState />
    )
  }
}

function Search() {
  const [posts, setPosts] = useState(null);
  const [totalPosts, setTotalPosts] = useState('-');
  const typingTimer = useRef(null);

  const handleSearch = (e) => {
    const input = e.target.value;

    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }

    if (input.length > 0) {
      setPosts([]);
    }

    typingTimer.current = setTimeout(() => {
      gettingData(input);
    }, 1000);
  }

  const gettingData = (input) => {
    axios.get(`http://localhost:8000/api/search?q=${input}`)
    .then((res) => {
      setPosts(res.data.resources);
      setTotalPosts(res.data.total);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
  <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
    <div className='bg-white text-gray-900'>
      <header className='mt-10 p-7 flex justify-between items-center'>
        <div>
          <h1 className='text-[26px] font-bold underline underline-offset-2'>Search Page</h1>
          <p className='text-sm italic font-medium text-gray-500'>Found <span className='font-bold text-gray-700'>{totalPosts}</span> similar post title</p>
        </div>
      </header>

      <section>
        <div className='flex items-center justify-center text-xl mt-10'>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1 w-3/4"
            onChange={(e) => {
              handleSearch(e);
            }}
            />
        </div>
      </section>

      <section className={posts ? 'mt-10 pb-10' : 'pb-5'}>
        {posts ? showData(posts) : <p className='text-center italic text-gray-500 text-lg font-medium mt-10'>What are you looking for?</p>}
      </section>
    </div>
  </div>
  )
}

export default Search;
