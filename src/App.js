
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import TabHeader from './components/TabHeader/TabHeader';
import Favourite from './pages/Favourites/Favourite';
import Home from './pages/Home/Home';
import Recent from './pages/Recent/Recent';

function App() {

  const [loadervis, setloadervis] = useState(true)

  setTimeout(() => {
    setloadervis(false)
  }, 2000);
  return (
    <div className="App">
      {
        loadervis ? <Loader /> :
          <>
            <Header />
            <TabHeader />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/fav' element={<Favourite />} />
              <Route path='/rec' element={<Recent />} />
            </Routes>
          </>
      }
    </div>
  );
}

export default App;
