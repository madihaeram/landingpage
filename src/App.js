
import './App.css';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
   <Navbar/>
    <Home/>
    <Feature/>
    <Footer/>
    </div>
  );
}

export default App;
