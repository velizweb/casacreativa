import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanySetupPenaltiesPage from '../pages/CompanySetupPenaltiesPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanySetupPenaltiesPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-penalties/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-penalties/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/setup/employees-penalties/update/:company_id/:penaltie_id',
    }
]

export default routes