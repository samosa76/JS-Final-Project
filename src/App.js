
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Categories from './pages/Categories';
import Books from './pages/Books';
import Layout from './Layout/Index';
import About from './pages/About';


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/Books' element={<Books />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
