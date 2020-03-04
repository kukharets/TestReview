import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from './app/const';
import ProfileContainer from './app/views/containers/profile';

const App = () => {
  return (
    <Route
      path={routes.profilePage}
      component={() => <ProfileContainer isWishList />}
    />
  );
};

export default App;
