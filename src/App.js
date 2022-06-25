import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import('./component/Navigation'));
const HomeView = lazy(() => import('./views/Home'));
const MoviesView = lazy(() => import('./views/Movie'));
const MovieDetails = lazy(() => import('./views/MovieDetails'));
const Cast = lazy(() => import('./views/Cast'));
const Reviews = lazy(() => import('./views/Reviews'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/movies' element={<MoviesView />} exact />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} /> 
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} /> 
        </Routes>
        </Suspense>
      </>
  );
};
