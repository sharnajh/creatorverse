import { useRoutes } from 'react-router-dom';
import AddCreator from './pages/CreatorManagement/AddCreator/AddCreator.jsx';
import ShowCreators from './pages/CreatorManagement/ShowCreators';

const Routes = ({ creators }) => {
    const Routes = useRoutes([
        {
            path: '/',
            element: <ShowCreators creators={creators} />,
        },
        {
            path: '/add',
            element: <AddCreator />
        }
    ]);

    return Routes
}

export default Routes;