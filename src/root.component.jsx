import React from 'react';

import { DrawerFrame, NestedList } from 'components';

import { links } from './root.helper';

const Root = () => {
  return (
    <DrawerFrame>
      <NestedList linksList={links} />
    </DrawerFrame>
  );
};

export default Root;
