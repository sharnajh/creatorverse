import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/CreatorManagement/ShowCreators';
import ViewCreator from './pages/CreatorManagement/ViewCreator.jsx';
import AddCreator from './pages/CreatorManagement/AddCreator';
import EditCreator from './pages/CreatorManagement/EditCreator';

const Routes = ({ creators }) => {
    const Routes = useRoutes([
        {
            path: '/',
            element: <ShowCreators creators={creators} />,
        },
        {
            path: '/add',
            element: <AddCreator />
        },
        {
            path: 'edit/:creatorID',
            element: <EditCreator />
        },
        {
            path: 'view/:creatorID',
            element: <ViewCreator />
        }
    ]);

    return Routes
}

export default Routes;