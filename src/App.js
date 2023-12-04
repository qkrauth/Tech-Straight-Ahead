import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Henlo World</h1>
      <Header />
      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
