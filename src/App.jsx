import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import '@picocss/pico';
import './App.css';
import { supabase } from './client.js';
import Routes from './Routes.jsx';
import Nav from './components/Nav/Nav.jsx';

const App = () => {
  const NavRef = useRef();

  const [creators, setCreators] = useState();
  const [navHeight, setNavHeight] = useState(0);

  const fetchCreators = async () => {
    const { data } = await supabase
      .from('creators')
      .select();
    setCreators(data);
  }

  useEffect(() => {
    fetchCreators();
  }, []);

  useLayoutEffect(() => {
    if (NavRef.current) {
      const { height } = NavRef.current.getBoundingClientRect();
      setNavHeight(height + 40);
    }
  }, []);

  return (
    <>
      <Nav ref={NavRef} />
      <div id="main" style={{ marginTop: navHeight }}>
        <Routes creators={creators} />
      </div>
    </>
  )
}

export default App;