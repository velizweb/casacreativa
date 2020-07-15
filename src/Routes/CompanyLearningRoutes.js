import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import CompanyLearningPage from '../pages/CompanyLearningPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <CompanyLearningPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const routes = [
    {
        page : <Page list ExcludeRolsList={['Model']} />,
        path :  '/company/learning/:company_id',
    },
    {
        page : <Page find ExcludeRolsList={['Model']} />,
        path :  '/company/learning/find/:company_id/:item_id',
    },
    {
        page : <Page create ExcludeRolsList={['Model']} />,
        path :  '/company/learning/create/:company_id',
    },
    {
        page : <Page update ExcludeRolsList={['Model']} />,
        path :  '/company/learning/update/:company_id/:product_id',
    }
]

export default routes