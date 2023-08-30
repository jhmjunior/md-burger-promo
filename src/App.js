import logo from './assets/logo_sf.png';
import wplogo from './assets/WhatsApp.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Você pode ter direito a um brinde exclusivo!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://wa.me/5538997467203?text=Quero%20saber%20mais%20informações%20sobre%20o%20brinde%20do%20Instagram!"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button id='wp_button'><img src={wplogo} className="wpp-logo"/>Legal, quero conferir!</button>
        </a>
      </header>
    </div>
  );
}

export default App;
