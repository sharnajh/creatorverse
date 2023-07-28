import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import '@picocss/pico';
import './App.css';
import { supabase } from './client.js';
import Routes from './Routes.jsx';
import Nav from './components/Nav/Nav.jsx';
import FetchingData from './pages/CreatorManagement/ErrorViews/FetchingData';

const App = () => {
  const NavRef = useRef();

  const [creators, setCreators] = useState();
  const [navHeight, setNavHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCreators = async () => {
    const { data } = await supabase
      .from('creators')
      .select();
    setCreators(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchCreators();
  }, []);

  useLayoutEffect(() => {
    if (NavRef.current) {
      const { height } = NavRef.current.getBoundingClientRect();
      setNavHeight(height);
    }
  }, []);

  return (
    <>
      <Nav ref={NavRef} />

      {loading
        ? <FetchingData />
        : (
          <div id="main" style={{ marginTop: navHeight + 40 }}>
            <Routes creators={creators} />
          </div>
        )}

    </>
  )
}

export default App;