import React from 'react';
import RequestRolsPage from '../pages/RequestRolsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <RequestRolsPage {...props} PageAccess={PageAccess} accesibleBy={['Super admin','Admin','Monitor','Models']} />

const routes = [
    {
        page : <Page redirect />,
        path :  '/roles/validator/:company_id',
    }
]

export default routes