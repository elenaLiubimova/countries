import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
      </Main>
    </div>
  );
}

export default App;
