import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import ModelRequestsPage from '../pages/ModelRequestsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <ModelRequestsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Admin','Super admin', 'Monitor']} />,
        path :  '/model/requests/:company_id',
    }
]

export default routes