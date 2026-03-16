import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import LoadingState from '@/components/LoadingState.jsx';

const CategoryList = () => {
  const [categories, setCategories] = useState(null);

  const route = 'http://localhost:8000/api/category';

  useEffect(() => {
    axios.get(route)
    .then((res) => {
      setCategories(res.data.resources);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="px-6 bg-gray-200 min-h-screen pt-[65px]">
      <div className='bg-white'>

        <header className='mb-0 md:mb-5 mt-5 md:mt-10 p-3 md:p-7'>
          <h1 className='text-xl md:text-[26px] font-bold underline underline-offset-2'>Category Page</h1>
        </header>

        {/* Loading State */}
        {categories ?
        (
          <>
            {/* Category List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-7 md:pb-10 px-3 pt-3 md:px-7 md:pt-7">
              {categories.map((category) => (
                <Link to={`/category/${category.slug}/posts`} key={category.slug} className="bg-blue-100 p-3 md:text-lg text-center rounded-xl shadow-sm hover:bg-blue-300 transition-all text-gray-900 duration-100 hover:text-black">
                  <p className="text-sm font-bold uppercase">{category.name}</p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <LoadingState />
        )}
      </div>
    </div>
  );
};

export default CategoryList;