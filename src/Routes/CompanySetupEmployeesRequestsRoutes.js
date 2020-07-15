import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanySetupRequestsPage from '../pages/CompanySetupRequestsPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanySetupRequestsPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-requests/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-requests/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-requests/update/:company_id/:request_id',
    }
]

export default routes