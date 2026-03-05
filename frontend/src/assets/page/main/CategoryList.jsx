import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import LoadingState from '@/componets/LoadingState.jsx';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const route = 'http://localhost:8000/api/categories';

  useEffect(() => {
    axios.get(route)
    .then((res) => {
      setCategories(res.data.resources);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="px-6 bg-gray-200 min-h-screen pt-[65px]">
      <div className='bg-white'>

        <header className='mb-5 mt-10 p-7'>
          <h1 className='text-[26px] font-bold underline underline-offset-2'>Category Page</h1>
        </header>

        {/* Loading State */}
        {isLoading && (
          <LoadingState />
        )}

        {/* Category List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 px-7 pt-7">
          {!isLoading && categories.map((category) => (
            <Link to={`/category/${category.slug}`} key={category.slug} className="bg-blue-100 p-3 text-center rounded-xl shadow-sm hover:bg-blue-300 transition-all text-gray-900 duration-100 hover:text-black">
              <p className="text-sm font-bold uppercase">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;