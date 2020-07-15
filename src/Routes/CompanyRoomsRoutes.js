import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanySetupRoomsPage from '../pages/CompanySetupRoomsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanySetupRoomsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/rooms/list/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/rooms/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/rooms/update/:company_id/:room_id',
    },
    {
        page : <Page detail ExcludeRolsList={['Model']} />,
        path :  '/company/rooms/detail/:company_id/:room_id',
    }
]

export default routes