import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyDashboardPage from '../pages/CompanyDashboardPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyDashboardPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/dashboard/:company_id'
    }
]


						
						


export default routes