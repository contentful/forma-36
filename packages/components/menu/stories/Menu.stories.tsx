import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconButton } from '@contentful/f36-button';
import { ListIcon, CheckIcon } from '@contentful/f36-icons';
// import {
//   BrowserRouter as Router,
//   useHref,
//   useLinkClickHandler,
// } from 'react-router-dom';
//import { css } from 'emotion';
import { Menu, type MenuProps } from '../src';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

export const Basic: StoryObj<MenuProps> = {
  render: () => {
    return (
      <Menu>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<ListIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.SectionTitle>Entry Title</Menu.SectionTitle>
          <Menu.Item>Embed existing entry</Menu.Item>
          <Menu.Item icon={<CheckIcon />}>
            Create and embed existing entry
          </Menu.Item>
          <Menu.Divider />
          <Menu.SectionTitle>Help</Menu.SectionTitle>
          <Menu.Item as="a" href="https://contentful.com" target="_blank">
            About Contentful
          </Menu.Item>
        </Menu.List>
      </Menu>
    );
  },

  parameters: {
    chromatic: { delay: 300 },
  },
};

// export const Controlled: StoryObj<MenuProps> = (args) => {
//   const [isOpen, setIsOpen] = React.useState(true);
//   return (
//     <Menu
//       {...args}
//       isOpen={isOpen}
//       onOpen={() => {
//         setIsOpen(true);
//       }}
//       onClose={() => {
//         setIsOpen(false);
//       }}
//     >
//       <Menu.Trigger>
//         <IconButton
//           variant="secondary"
//           icon={<ListIcon />}
//           aria-label="toggle menu"
//         />
//       </Menu.Trigger>
//       <Menu.List>
//         <Menu.SectionTitle>Entry Title</Menu.SectionTitle>
//         <Menu.Item>Embed existing entry</Menu.Item>
//         <Menu.Item>Create and embed existing entry</Menu.Item>
//         <Menu.Divider />
//         <Menu.Item as="a" href="https://contentful.com" target="_blank">
//           About Contentful
//         </Menu.Item>
//       </Menu.List>
//     </Menu>
//   );
// };

// Controlled.parameters = {
//   chromatic: { delay: 300 },
// };

// export const WithDisabledItems: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu defaultIsOpen {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List>
//           <Menu.Item>Item 1</Menu.Item>
//           <Menu.Item>Item 2</Menu.Item>
//           <Menu.Item>Item 3</Menu.Item>
//           <Menu.Item isDisabled>Item 4 (disabled)</Menu.Item>
//           <Menu.Item>Item 5</Menu.Item>
//           <Menu.Item>Item 6</Menu.Item>
//           <Menu.Item isDisabled>Item 7 (disabled)</Menu.Item>
//           <Menu.Item>Item 8</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );
//   },

//   parameters: {
//     chromatic: { delay: 300 },
//   },
// };

// export const WithIconsOnItems: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu defaultIsOpen {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List>
//           <Menu.Item icon={<CheckIcon />}>Item 1</Menu.Item>
//           <Menu.Item>Item 2</Menu.Item>
//           <Menu.Item icon={<CheckIcon />}>Item 3</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );
//   },
// };

// export const WithMaxHeight: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu defaultIsOpen {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List
//           // You can pass a classname with maxHeight style or a style object directly
//           style={{ maxHeight: '200px' }}
//         >
//           {[...Array(20)].map((_, index) => {
//             const uniqueKey = `item-${index}`;
//             return <Menu.Item key={uniqueKey}>Item {index}</Menu.Item>;
//           })}
//         </Menu.List>
//       </Menu>
//     );
//   },

//   parameters: {
//     chromatic: { delay: 300 },
//   },
// };

// export const WithStickyHeaderAndFooter: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu defaultIsOpen {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List style={{ maxHeight: '300px' }}>
//           <Menu.ListHeader>
//             <Menu.Item>Item header</Menu.Item>
//           </Menu.ListHeader>
//           {[...Array(10)].map((_, index) => {
//             const uniqueKey = `sticky-header-${index}`;
//             return <Menu.Item key={uniqueKey}>Item {index}</Menu.Item>;
//           })}
//           <Menu.ListFooter>
//             <Menu.Item>Item footer</Menu.Item>
//           </Menu.ListFooter>
//         </Menu.List>
//       </Menu>
//     );
//   },

//   parameters: {
//     chromatic: { delay: 300 },
//   },
// };

// // ToDo: Fixme
// // export const WithReactRouterLinks: StoryObj<MenuProps> = (args) => {
// //     function MenuLink({ children, replace = false, to, ...props }) {
// //       const href = useHref(to);
// //       const handleClick = useLinkClickHandler(to, {
// //         replace,
// //       });

// //       return (
// //         <Menu.Item {...props} as="a" href={href} onClick={handleClick}>
// //           {children}
// //         </Menu.Item>
// //       );
// //     }

// //     return (
// //       <Router>
// //         <Menu defaultIsOpen {...args}>
// //           <Menu.Trigger>
// //             <IconButton
// //               variant="secondary"
// //               icon={<ListIcon />}
// //               aria-label="toggle menu"
// //             />
// //           </Menu.Trigger>
// //           <Menu.List>
// //             <MenuLink to="/">Home</MenuLink>
// //             <MenuLink to="/about">About</MenuLink>
// //             <MenuLink to="/other">Other</MenuLink>
// //           </Menu.List>
// //         </Menu>
// //       </Router>
// //     );
// //   };

// //   WithReactRouterLinks.parameters: {
// //     chromatic: { delay: 300 },
// //   };

// export const WithInitialFocusedItem: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu defaultIsOpen {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List>
//           <Menu.Item>Create an entry</Menu.Item>
//           <Menu.Item isInitiallyFocused>Remove an entry</Menu.Item>
//           <Menu.Item>Embed existing entry</Menu.Item>
//         </Menu.List>
//       </Menu>
//     );
//   },
// };
// WithInitialFocusedItem.parameters = {
//   chromatic: { delay: 300 },
// };

export const WithSubmenu: StoryObj<MenuProps> = {
  render: (args) => {
    return (
      <Menu {...args}>
        <Menu.Trigger>
          <IconButton
            variant="secondary"
            icon={<ListIcon />}
            aria-label="toggle menu"
          />
        </Menu.Trigger>
        <Menu.List>
          <Menu.Item>Create an entry</Menu.Item>
          <Menu>
            <Menu.Trigger>
              <button type="button">Remove an entry</button>
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item>Sub item 1</Menu.Item>
              <Menu.Item>Sub item 2</Menu.Item>
              <Menu.Item>Sub item 3</Menu.Item>
            </Menu.List>
          </Menu>
          <Menu.Item>Embed existing entry</Menu.Item>
        </Menu.List>
      </Menu>
    );
  },

  parameters: {
    chromatic: { delay: 300 },
  },
};

// export const WithSubmenuDifferentAlignments: StoryObj<MenuProps> = {
//   render: (args) => {
//     const styles = {
//       container: css({
//         backgroundColor: 'lightblue',
//         display: 'flex',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         width: '98vw',
//       }),
//       wrapper: css({
//         display: 'flex',
//         width: '95vw',
//         justifyContent: 'right',
//         backgroundColor: 'pink',
//         overflow: 'hidden',
//       }),
//     };

//     return (
//       <div className={styles.container}>
//         <div className={styles.wrapper}>
//           <Menu {...args}>
//             <Menu.Trigger>
//               <IconButton
//                 variant="secondary"
//                 icon={<ListIcon />}
//                 aria-label="toggle menu"
//               />
//             </Menu.Trigger>
//             <Menu.List>
//               <Menu.Item>Create an entry</Menu.Item>
//               <Menu.Submenu isAutoalignmentEnabled>
//                 <Menu.SubmenuTrigger>Remove an entry</Menu.SubmenuTrigger>
//                 <Menu.List>
//                   <Menu.Item>Sub item 1</Menu.Item>
//                   <Menu.Item>Sub item 2</Menu.Item>
//                   <Menu.Item>Sub item 3</Menu.Item>
//                 </Menu.List>
//               </Menu.Submenu>
//               <Menu.Item>Embed existing entry</Menu.Item>
//             </Menu.List>
//           </Menu>
//         </div>
//       </div>
//     );
//   },
// };

// export const WithMultipleSubmenus: StoryObj<MenuProps> = {
//   render: (args) => {
//     return (
//       <Menu {...args}>
//         <Menu.Trigger>
//           <IconButton
//             variant="secondary"
//             icon={<ListIcon />}
//             aria-label="toggle menu"
//           />
//         </Menu.Trigger>
//         <Menu.List>
//           <Menu.Item>Create an entry</Menu.Item>

//           <Menu.Submenu>
//             <Menu.SubmenuTrigger>Remove an entry</Menu.SubmenuTrigger>
//             <Menu.List>
//               <Menu.Item>Sub item 1</Menu.Item>

//               <Menu.Submenu>
//                 <Menu.SubmenuTrigger>Submenu</Menu.SubmenuTrigger>
//                 <Menu.List>
//                   <Menu.Item>Sub item 1</Menu.Item>
//                   <Menu.Item>Sub item 2</Menu.Item>
//                   <Menu.Item>Sub item 3</Menu.Item>
//                 </Menu.List>
//               </Menu.Submenu>

//               <Menu.Item>Sub item 3</Menu.Item>
//             </Menu.List>
//           </Menu.Submenu>

//           <Menu.Item>Embed existing entry</Menu.Item>

//           <Menu.Submenu>
//             <Menu.SubmenuTrigger>Second submenu</Menu.SubmenuTrigger>
//             <Menu.List>
//               <Menu.Item>Sub item 1</Menu.Item>
//               <Menu.Item>Sub item 2</Menu.Item>
//               <Menu.Item>Sub item 3</Menu.Item>
//             </Menu.List>
//           </Menu.Submenu>
//         </Menu.List>
//       </Menu>
//     );
//   },

//   parameters: {
//     chromatic: { delay: 300 },
//   },
// };
