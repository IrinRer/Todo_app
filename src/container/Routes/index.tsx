import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Error from 'common/Error';
// import ErrorBoundary from 'common/ErrorBoundary';
import Home from 'pages/Home';
import { ROUTES } from 'constants/route';
import AuthPage from 'pages/AuthPage';
import SignUp from 'container/AuthContainer/SignUp';
import PrivateRoute from './PrivateRoute';

const CreateRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <ErrorBoundary> */}
      <Routes>
        <Route
          path={ROUTES.home.path}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.login.path} element={<AuthPage />} />
        <Route path={ROUTES.signUp.path} element={<SignUp />} />
        {/* <Route
            path={ROUTES.notFound.path}
            element={<Error text="Страница не найдена" />}
          /> */}
      </Routes>
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
};

export default CreateRoutes;
