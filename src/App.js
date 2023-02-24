import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Main from './components/Main';
import CurrentCountry from './pages/CurrentCountry';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<CurrentCountry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
