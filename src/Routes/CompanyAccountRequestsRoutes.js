import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyRequestModelAccountPage from '../pages/CompanyRequestModelAccountPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyRequestModelAccountPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />
const prefix = '/company/account/requests';

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  `${prefix}/:company_id`,
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  `${prefix}/create/:company_id/:user_id`,
    },
    {
        page : <Page detail ExcludeRolsList={['Model']} />,
        path :  `${prefix}/detail/:company_id/:user_id/:request_id`,
    }
]

export default routes