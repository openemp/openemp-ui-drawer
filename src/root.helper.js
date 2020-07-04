/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const links = [
  {
    name: 'Template',
    href: '/template',
    submenu: [
      {
        name: 'Sub test 1',
        href: '/subtest-1',
      },
      {
        name: 'Sub test 2',
        href: '/subtest-2',
        submenu: [
          {
            name: 'Sub sub test ',
            href: '/1',
          },
        ],
      },
    ],
  },
  {
    name: 'Test 2',
    href: '/test-2',
  },
  {
    name: 'Test 3',
    href: '/test',
    submenu: [
      {
        name: 'Sub test 1',
        href: '/test/subtest',
        submenu: [
          {
            name: 'Sub sub test ',
            href: '/test/subtest/1',
          },
        ],
      },
    ],
  },
];
