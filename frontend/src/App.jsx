import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/page/main/Home.jsx';
import Navbar from './assets/componets/Navbar.jsx';
import PostList from './assets/page/main/PostList.jsx';
import CategoryList from './assets/page/main/CategoryList.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<PostList />} />
            <Route path="/category" element={<CategoryList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;