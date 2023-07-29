import { useEffect, useState, useRef, useLayoutEffect, createContext } from 'react';
import '@picocss/pico';
import './App.css';
import { supabase } from './client.js';
import Routes from './Routes.jsx';
import Nav from './components/Nav/Nav.jsx';
import FetchingData from './pages/ErrorViews/FetchingData';
import Footer from './components/Footer/Footer';

// Context API to store + manage data retrieved from Supabase across the app
export const CreatorsContext = createContext([]);
export const CreatorsContextRefresh = createContext();

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
    <main>
      <span>
        <Nav ref={NavRef} />

        {loading ? <FetchingData /> :
          (
            <div id="main" style={{ marginTop: navHeight + 40 }}>
              <CreatorsContext.Provider value={creators}>
                <CreatorsContextRefresh.Provider value={fetchCreators}>
                  <Routes />
                </CreatorsContextRefresh.Provider>
              </CreatorsContext.Provider>
            </div >
          )
        }
      </span>

      <Footer />
    </main>
  )
}

export default App;