import React from 'react';

import { CollapseItem } from 'features';

export default function NestedList({ linksList }) {
  return linksList.map((rootElement) => {
    return (
      <CollapseItem {...rootElement} key={rootElement.name}>
        {rootElement.submenu
          ? rootElement.submenu.map((element) => {
              return (
                <CollapseItem {...element} href={`${rootElement.href}${element.href}`} key={element.name} level={1}>
                  {element.submenu
                    ? element.submenu.map((subElement) => {
                        return (
                          <CollapseItem
                            {...subElement}
                            href={`${rootElement.href}${element.href}${subElement.href}`}
                            key={subElement.name}
                            level={2}
                          />
                        );
                      })
                    : null}
                </CollapseItem>
              );
            })
          : null}
      </CollapseItem>
    );
  });
}
