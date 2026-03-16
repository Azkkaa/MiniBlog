import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/main/Home.jsx';
import Navbar from './assets/components/Navbar.jsx';
import PostList from './assets/pages/main/PostList.jsx';
import CategoryList from './assets/pages/main/CategoryList.jsx';
import CategoryPostShow from './assets/pages/show/CategoryPostShow.jsx';
import PostDetail from './assets/pages/show/PostDetail.jsx';
import AuthorPostShow from './assets/pages/show/AuthorPostShow.jsx';
import SearchPage from './assets/pages/main/Search.jsx';
import ErrorPage from './assets/pages/errors/error.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:category/posts" element={<CategoryPostShow />} />
            <Route path="/author/:id/posts" element={<AuthorPostShow />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/search" element={<SearchPage />} />

            {/* Error Page Handler */}
            <Route path="*" element={<ErrorPage code={404} message="Page Not Found" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;