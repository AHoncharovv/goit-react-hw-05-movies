import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
        
      // }}
    >
      <Navigation />

      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/movies' element={<MoviesView />} />
        <Route path='*' element={<HomeView />} /> 
      </Routes>
      
    </div>
  );
};
