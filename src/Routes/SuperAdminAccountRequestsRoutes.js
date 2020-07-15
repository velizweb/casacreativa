import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import AdminAccountRequestsPage from '../pages/AdminAccountRequestsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <AdminAccountRequestsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/super/admin/account/requests/list',
    },
    {
        page : <Page detail ExcludeRolsList={['Model']} />,
        path :  '/super/admin/account/requests/detail/:company_id/:user_id/:request_id',
    }
]

export default routes