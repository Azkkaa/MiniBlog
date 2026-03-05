import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/page/main/Home.jsx';
import Navbar from './assets/componets/Navbar.jsx';
import PostList from './assets/page/main/PostList.jsx';
import CategoryList from './assets/page/main/CategoryList.jsx';
import CategoryShow from './assets/page/show/CategoryShow.jsx';
import PostShow from './assets/page/show/Post.jsx';

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
            <Route path="/category/:category" element={<CategoryShow />} />
            <Route path="/post/:id" element={<PostShow />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;