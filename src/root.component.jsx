import React, { useEffect } from 'react';
import { DrawerFrame, NestedList } from 'components';
import { links } from './root.helper';

const Root = () => {
  useEffect(() => {
    window.appMountSuccess('success');
  }, []);
  return (
    <DrawerFrame>
      <NestedList linksList={links} />
    </DrawerFrame>
  );
};

export default Root;
