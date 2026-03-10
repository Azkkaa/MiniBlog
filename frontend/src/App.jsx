import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/page/main/Home.jsx';
import Navbar from './assets/components/Navbar.jsx';
import PostList from './assets/page/main/PostList.jsx';
import CategoryList from './assets/page/main/CategoryList.jsx';
import CategoryPostShow from './assets/page/show/CategoryPostShow.jsx';
import PostDetail from './assets/page/show/PostDetail.jsx';
import AuthorPostShow from './assets/page/show/AuthorPostShow.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:category/posts" element={<CategoryPostShow />} />
            <Route path="/author/:id/posts" element={<AuthorPostShow />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;