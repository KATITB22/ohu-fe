import React, { LazyExoticComponent } from 'react';

const HomePage = React.lazy(() =>
  import('@pages/Homepage').then((module) => ({ default: module.Homepage }))
);

const TourPage = React.lazy(() =>
  import('@pages/PageTour').then((module) => ({
    default: module.Tour
  }))
);

const PageNotFound = React.lazy(() =>
  import('@pages/PageNotFound').then((module) => ({
    default: module.PageNotFound
  }))
);

const Leaderboards = React.lazy(() =>
  import('@pages/Leaderboards').then((module) => ({
    default: module.Leaderboards
  }))
);

const LoginPage = React.lazy(() => 
  import('@pages/LoginPage').then((module) => ({
    default: module.LoginPage    
  }))
);

interface PageRouting {
  title: string;
  path: string;
  component: LazyExoticComponent<any>;
}

const PageNotFoundRouting: PageRouting = {
  title: 'Page Not Found',
  path: '*',
  component: PageNotFound
};

export const Routing: PageRouting[] = [
  {
    title: 'Home Page',
    path: '/',
    component: HomePage
  },
  {
    title: 'OHU Leaderboard',
    path: '/leaderboard',
    component: Leaderboards
  },
  {
    title: 'OHU Tour',
    path: '/tour',
    component: TourPage
  }, {
    title: 'Login',
    path: '/login',
    component: LoginPage,
  },
  PageNotFoundRouting
];
