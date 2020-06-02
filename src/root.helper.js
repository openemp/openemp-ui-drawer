/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const links = [
  {
    name: 'Template',
    href: '/template',
    submenu: [
      {
        name: 'Sub test 1',
        href: '/template/subtest-1',
      },
      {
        name: 'Sub test 2',
        href: '/template/subtest-2',
      },
    ],
  },
  {
    name: 'Test 2',
    href: '/test-2',
  },
  {
    name: 'Test 3',
    href: '/test-3',
    submenu: [
      {
        name: 'Sub test 1',
        href: '/test-3/subtest-1',
        submenu: [
          {
            name: 'Sub sub test ',
            href: '/test-3/subtest-1/subtest',
          },
        ],
      },
    ],
  },
];

// console.log('-------', System.import('@openemp-mf/template'));
