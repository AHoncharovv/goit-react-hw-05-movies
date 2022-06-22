import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import MovieDetails from 'views/MovieDetails';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';

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
          <Route path='/movies' element={<MoviesView />} exact />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<HomeView />} /> 
        </Routes>
       
      
    </div>
  );
};
