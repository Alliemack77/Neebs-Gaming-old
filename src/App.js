import {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';

import './sass/main.scss';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        
        <Hero />
        
      </Layout>
      
      


    </BrowserRouter>
  )
}

export default App;
