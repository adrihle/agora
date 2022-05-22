import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

interface Route {
    path: string;
    component: LazyExoticComponent< React.FC> | React.FC,
    name: string;
    private: boolean;
    children?: Route[]
}

const LazyHome = lazy(() => import(/*webpackChunkName: "home-page"*/'../pages/home/home.page'));
const LazyAuth = lazy(() => import(/*webpackChunkName: "auth-page"*/'../pages/auth/auth.page'));
const LazyPost = lazy(() => import(/*webpackChunkName: "post-page"*/'../pages/post/post.page'));


export const routes: Route[] = [
    {
        path: '/',
        component: LazyHome,
        name: 'Home',
        private: true
    },
    {
        path: '/auth',
        component: LazyAuth,
        name: 'Auth',
        private: false
    },
    {
        path: '/post',
        component: LazyPost,
        name: 'Post',
        private: true
    }
]