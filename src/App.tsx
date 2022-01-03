import './styles/app.css';
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import LandingContent from './components/LandingContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <LandingContent />
      <Footer />
    </div>
  );
}

export default App;
