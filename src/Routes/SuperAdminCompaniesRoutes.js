import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompaniesPage from '../pages/CompaniesPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompaniesPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/super/admin/companies/list',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/super/admin/companies/create',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/super/admin/companies/update/:company_id',
    },
    {
        page : <Page owner ExcludeRolsList={['Model']} />,
        path :  '/super/admin/companies/list/owner',
    }
]

export default routes