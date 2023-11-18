import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import Category from "../../pages/Category/Category";
import CourseSummaryCard from "../../pages/Shared/CourseSummaryCard/CourseSummaryCard";
import CourseDetails from "../../pages/Shared/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import LeftsideNav from "../../pages/Shared/LeftsideNav/LeftsideNav";
import BuyCourse from "../../pages/Shared/BuyCourse/BuyCourse";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import FAQ from "../../pages/FAQ/FAQ";
import Blog from "../../pages/Blog/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => {
          return fetch(`https://learning-guru-server-one.vercel.app/courses`);
        },
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://learning-guru-server-one.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch(`https://learning-guru-server-one.vercel.app/courses`);
        },
      },
      {
        path: "/courses",
        element: <LeftsideNav></LeftsideNav>,
        loader: () => {
          return fetch(`https://learning-guru-server-one.vercel.app/courses`);
        },
      },
      {
        path: "/course/buy/:id",
        element: (
          <PrivateRoute>
            <BuyCourse></BuyCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://learning-guru-server-one.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
