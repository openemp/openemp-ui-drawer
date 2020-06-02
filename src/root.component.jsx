import React from 'react';
import { createMemorySource, createHistory, LocationProvider } from '@reach/router';
import { DisplayGreeting } from 'features';

const history = createHistory(window);

const Root = () => {
  return (
    // <LocationProvider history={history}>
    <LocationProvider history={history}>
      <DisplayGreeting />;
    </LocationProvider>
  );
};

export default Root;
