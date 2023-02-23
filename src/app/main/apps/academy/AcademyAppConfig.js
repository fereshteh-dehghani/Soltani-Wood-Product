import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Course = lazy(() => import('./course/Course'));
const Courses = lazy(() => import('./courses/Courses'));

const AcademyAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/academy/courses/:courseId/*',
      element: <Course />,
    },
    {
      path: 'apps/academy/courses',
      element: <Courses />,
    },
    {
      path: 'apps/academy',
      element: <Navigate to="/apps/academy/courses" />,
    },
  ],
};

export default AcademyAppConfig;
