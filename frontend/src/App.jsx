import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './assets/page/Home.jsx';
import Navbar from './assets/componets/Navbar.jsx';
import Post from './assets/page/Post.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;