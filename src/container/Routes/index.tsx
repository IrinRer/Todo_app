import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'component/common/ErrorBoundary';
import Home from 'pages/Home';
import Theme from 'component/Theme';
import { ROUTES } from 'constants/route';
import Error from 'component/common/Error';
import AuthPage from 'pages/AuthPage';
import SignUp from 'container/AuthContainer/SignUp';
import PrivateRoute from './PrivateRoute';

const CreateRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ErrorBoundary>
        <Theme/>
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
          <Route
            path={ROUTES.notFound.path}
            element={<Error text="Page not found" />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default CreateRoutes;
