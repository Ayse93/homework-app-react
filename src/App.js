import logo from './logo.svg';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-section'><Left />
        <Right />

      </div>

    </div>
  );
}

export default App;
