import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanySetupInventaryPage from '../pages/CompanySetupInventaryPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanySetupInventaryPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/inventary/list/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/inventary/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/inventary/update/:company_id/:item_id',
    }
]

export default routes