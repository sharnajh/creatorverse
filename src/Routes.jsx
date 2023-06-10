import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/CreatorManagement/ShowCreators';
import ViewCreator from './pages/CreatorManagement/ViewCreator.jsx';
import CreatorForm from './pages/CreatorManagement/CreatorForm';

const Routes = ({ creators }) => {
    const Routes = useRoutes([
        {
            path: '/',
            element: <ShowCreators creators={creators} />,
        },
        {
            path: '/add',
            element: <CreatorForm />
        },
        {
            path: 'edit/:creatorID',
            element: <CreatorForm />
        },
        {
            path: 'view/:creatorID',
            element: <ViewCreator />
        }
    ]);

    return Routes
}

export default Routes;