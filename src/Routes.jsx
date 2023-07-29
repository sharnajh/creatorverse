import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/CreatorManagement/ShowCreators';
import ViewCreator from './pages/CreatorManagement/ViewCreator/ViewCreator';
import AddCreator from './pages/CreatorManagement/AddCreator';
import EditCreator from './pages/CreatorManagement/EditCreator';

const Routes = () => {
    const Routes = useRoutes([
        {
            path: '/',
            element: <ShowCreators />,
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