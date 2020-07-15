import React from 'react';
import ExceptRols from '../Helpers/ExceptRols'
import AccountSecurityPage from '../pages/AccountSecurityPage';
import PageAccess from '../MidleWare/PageAccess';

const Page = ( props ) => <AccountSecurityPage {...props} PageAccess={PageAccess} accesibleBy={ExceptRols(props.ExcludeRolsList)} />

const exclude = []
const routes = [

    {
        page : <Page ExcludeRolsList={exclude} update />,
        path :  '/account/security/update',
    }
]

export default routes