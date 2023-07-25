import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Classifier from "../pages/Classifier";
import Results from "../pages/Results";

const Routes = () => {
  const element = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Classifier />,
        },
        {
          path: "/results",
          element: <Results />,
        },
      ],
    },
  ]);

  return element;
};

export default Routes;
