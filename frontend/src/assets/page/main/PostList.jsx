import { useEffect, useState } from 'react';
import Text from '@/utils/Text.js';
import axios from 'axios';
import { SpinnerGapIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Post () {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
        .then((res) => {
          setIsLoading(false);
            setPosts(res.data.resources);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }, []);

return (
  <div className='pt-[65px] bg-gray-200 min-h-screen px-5 pb-10'>
    <div className='bg-white text-gray-900'>
      <header className='mt-10 p-7'>
        <h1 className='text-[26px] font-bold underline underline-offset-2'>Post Page</h1>
      </header>

      <div>
        {isLoading && (
          <div className='flex justify-center items-center py-20'>
            <div className='bg-blue-50 p-2 rounded-lg'>
              <SpinnerGapIcon size={43} className="animate-spin text-blue-600 text-center" weight='bold'/>
            </div>
          </div>
        )}
        {posts.map((post) => (
          <div key={post.id} className='p-5 border-t border-gray-500'>
            <h2 className='text-lg font-semibold'>{post.title}</h2>

            <p className='text-gray-600 mt-2'>
              {Text.prototype.limitText(post.content, 130)}
              <Link to={`/post/${post.id}`} className='text-blue-600 hover:underline ml-2'>Read More</Link>
            </p>

            <div className='flex justify-end mt-2'>
              <p className='text-gray-600 mr-2'>Author :
                <Link to={`/user/${post.relations.user.id}`} className='text-blue-600 hover:underline ml-1'>{post.relations.user.name}</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default Post;