import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './components/Acceuil';
import Categories from './components/Categories';
import Articles from './components/Articles';
import NotFound from './components/NotFound';
import Cuisine from './components/Cuisine';
import Voyages from './components/Voyages';
import Technologie from './components/Technologie';
import ArticleDetails from './components/ArticleDetails';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Acceuil />} />
        <Route path='/home' element={<Acceuil />} />
        <Route path='/categories' >
          <Route index element={<Categories />} />
          <Route path='cuisine' element={<Cuisine />} />
          <Route path='voyage' element={<Voyages />} />
          <Route path='technologie' element={<Technologie />} />
        </Route>
        <Route path='/articles' >
          <Route index element={<Articles />} />
          <Route path=':id' element={<ArticleDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
