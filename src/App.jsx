import { useEffect, useState } from 'react';
import '@picocss/pico';
import { useRoutes } from 'react-router-dom';
import { supabase } from './client.js';
import AddCreator from './pages/CreatorManagement/AddCreator/AddCreator.jsx';
import ShowCreators from './pages/CreatorManagement/ShowCreators';

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
  
  const Routes = useRoutes([
    {
      path: '/',
      element: <ShowCreators creators={creators} />
    },
    {
      path: '/add',
      element: <AddCreator />
    }
  ]);

  return Routes;
}

export default App;