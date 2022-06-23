import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import('./Navigation'));
const HomeView = lazy(() => import('../views/Home'));
const MoviesView = lazy(() => import('../views/Movie'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
