
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TabHeader from './components/TabHeader/TabHeader';
import Favourite from './pages/Favourites/Favourite';
import Home from './pages/Home/Home';
import Recent from './pages/Recent/Recent';

function App() {
  return (
    <div className="App">
      <Header />
      <TabHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fav' element={<Favourite />} />
          <Route path='/rec' element={<Recent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
