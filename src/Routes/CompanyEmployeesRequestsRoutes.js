import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import RequestsManagementPage from '../pages/RequestsManagementPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <RequestsManagementPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/employees/requests/:company_id'
    }
]


						
						


export default routes