import React from 'react';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { BulletList } from 'react-content-loader';
import { authOperations, authSelectors } from './redux/auth';

import AppBar from './components/AppBar/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container/Container';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const MyBulletListLoader = () => <BulletList />;

  return (
    <Container>
      {isFetchingCurrentUser ? (
        MyBulletListLoader()
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
