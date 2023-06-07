import '@picocss/pico';
import { useRoutes } from 'react-router-dom';
import CreateAccount from './pages/AccountManagement/CreateAccount/CreateAccount';
import AddCreator from './pages/CreatorManagement/AddCreator';

const App = () => {
  const Routes = useRoutes([
    {
      path: '/',
      element: <CreateAccount />
    },
    {
      path: '/signup',
      element: <CreateAccount />
    },

    // Creator CRUD
    {
      path: '/add',
      element: <AddCreator />
    }
  ]);

  return Routes;
}

export default App;