import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [totalUser, setTotalUser] = useState("-");
  const [totalPost, setTotalPost] = useState("-");
  const [totalCategory, setTotalCategory] = useState("-");

  const route = 'http://localhost:8000/api/dashboard';

  useEffect(() => {
    axios.get(route)
    .then((res) => {
      setTotalUser(res.data.resources.totalUsers);
      setTotalPost(res.data.resources.totalPosts);
      setTotalCategory(res.data.resources.totalCategories);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <div className="px-6 bg-gray-200 min-h-screen pt-[65px]">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-10">
        {/* Card 1: Users Total */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Author</p>
          <h3 className="text-4xl font-bold text-blue-600 mt-2">{totalUser}</h3>
        </div>

        {/* Card 2: Posts Total */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Posts</p>
          <h3 className="text-4xl font-bold text-indigo-600 mt-2">{totalPost}</h3>
        </div>

        {/* Card 3: Categories Total */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Categories</p>
          <h3 className="text-4xl font-bold text-emerald-600 mt-2">{totalCategory}</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-50 items-center">
          <Link to="/posts" className="text-2xl text-blue-500 hover:text-blue-700 hover:underline font-bold m-auto">
            See All Post →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;