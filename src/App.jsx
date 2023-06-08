import { useEffect, useState } from 'react';
import '@picocss/pico';
import { supabase } from './client.js';
import Routes from './Routes.jsx';

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
    <Routes creators={creators} />
  )
}

export default App;