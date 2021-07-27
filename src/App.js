import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './sass/main.scss';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Hero />


    </BrowserRouter>
  )
}

export default App;
