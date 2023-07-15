import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader';
import SearchScreen from './screens/SearchScreen';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/search' element={<SearchScreen />} />
            <Route path='/search/:dogName' element={<SearchScreen />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
