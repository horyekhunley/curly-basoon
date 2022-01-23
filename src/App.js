import './App.css';
import './components/NewsFeed'
import './components/CurrencyConverter'
import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className='app'>
      <h1>Crypto Converter</h1>
      <div className='app-wrapper'>
      <CurrencyConverter />
      <NewsFeed />
      </div>
    </div>
  );
}

export default App;
