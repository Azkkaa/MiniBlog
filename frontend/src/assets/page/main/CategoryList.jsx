import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { SpinnerGapIcon } from '@phosphor-icons/react'

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-600 bg-gray-200">
        <SpinnerGapIcon className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <div className="px-6 bg-gray-200 min-h-screen pt-[65px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-10">
        {categories.map((category) => (
          <Link to={`/category/${category.slug}`} key={category.slug} className="bg-white p-3 text-center rounded-xl shadow-sm hover:bg-blue-300 transition-all text-gray-500 duration-100 hover:text-black">
            <p className="text-sm font-bold uppercase">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;