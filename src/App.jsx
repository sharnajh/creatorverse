import { useEffect, useState } from 'react';
import '@picocss/pico';
import './App.css';
import { supabase } from './client.js';
import Routes from './Routes.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
  const [creators, setCreators] = useState();

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, err } = await supabase
        .from('creators')
        .select();
      err && console.error(err);
      setCreators(data);
    }
    fetchCreators();
  }, []);

  return (
    <>
      <Nav />
      <main className="container">
        <Routes creators={creators} />
      </main>
    </>
  )
}

export default App;