import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

interface Route {
    path: string;
    component: LazyExoticComponent< React.FC> | React.FC,
    name: string;
    children?: Route[]
}

const LazyHome = lazy(() => import('../pages/home/home.page'));
const LazyAuth = lazy( () => import('../pages/auth/auth.page'));


export const routes: Route[] = [
    {
        path: '/',
        component: LazyHome,
        name: 'Home'
    },
    {
        path: '/auth',
        component: LazyAuth,
        name: 'Auth'
    },
]