import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

// eslint-disable-next-line no-undef

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    return React.createElement('div', null, 'error');
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

export { links } from './root.helper';

export const devtools = {
  overlays: {
    selectors: ['.root.dashboardHeight'],
    options: {
      color: 'red',
    },
  },
};
