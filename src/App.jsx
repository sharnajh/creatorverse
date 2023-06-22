import { useEffect, useState } from 'react';
import '@picocss/pico';
import './App.css';
import { supabase } from './client.js';
import Routes from './Routes.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
  const [creators, setCreators] = useState();

  const fetchCreators = async () => {
    const { data } = await supabase
      .from('creators')
      .select();
    setCreators(data);
  }

  useEffect(() => {
    fetchCreators();
  }, []);

  return (
    <>
      <Nav />
      <Routes creators={creators} />
    </>
  )
}

export default App;