const path = require('path');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Define your custom routes
  const customRoutes = [
    {
      path: "/home",
      component: path.resolve("./src/pages/home.js"),
    },
    {
      path: "/contact",
      component: path.resolve("./src/pages/contact/index.js"),
    },
    {
        path: "/contact",
        component: path.resolve("./src/pages/contact/index.js"),
      },
    // Add more routes as needed
  ];

  // Create pages for each route
  customRoutes.forEach((route) => {
    createPage({
      path: route.path,
      component: route.component,
    });
  });
};



// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage, deletePage } = actions;

//     // Remove the trailing slash from the path, if present
//     const newPath = page.path === '/' ? page.path : page.path.replace(/\/$/, '');

//     if (page.path !== newPath) {
//       // Delete the current page and recreate it with the new path
//       deletePage(page);
//       createPage({
//         ...page,
//         path: newPath,
//       });
//     }
//   };

// gatsby-node.js

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;

//   // Define your custom routes
//   const customRoutes = [
//     {
//       path: "/about",
//       component: path.resolve("./src/pages/about/index.js"),
//     },
//     {
//       path: "/contact",
//       component: path.resolve("./src/pages/contact/index.js"),
//     },
//     // Add more routes as needed
//   ];

//   // Create pages for each route
//   customRoutes.forEach((route) => {
//     createPage({
//       path: route.path,
//       component: route.component,
//     });
//   });
// };

