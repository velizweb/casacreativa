import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyPaySheetPage from '../pages/CompanyPaySheetPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyPaySheetPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/paysheet/history/:company_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/paysheet/create/:company_id',
    },
    {
        page : <Page latest ExcludeRolsList={['Model']} />,
        path :  '/company/paysheet/management/latest/:company_id',
    },
    {
        page : <Page load ExcludeRolsList={['Model']} />,
        path :  '/company/paysheet/management/load/:company_id/:paysheet_code',
    },
    {
        page : <Page detail ExcludeRolsList={['Model']} />,
        path :  '/company/paysheet/detail/:company_id/:paysheet_code/:paysheet_id',
    }
]


						
						


export default routes