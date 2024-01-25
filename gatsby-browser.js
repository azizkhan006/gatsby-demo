// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("aziz", location.pathname);
//   location.pathname  = location.pathname.replace(/\/$/, "")
// //   if (location.pathname.endsWith('/') && location.pathname !== '/') {
// //       // Redirect to the non-trailing-slash version of the URL
// //       window.history.replaceState({}, '', location.pathname.slice(0, -1));
// //   }
//   console.log("aziz123", location.pathname);
// };

// exports.onPreRouteUpdate = ({ location, prevLocation }) => {
//   // console.log("Navigating from:", prevLocation ? prevLocation.pathname : null);
//   // location.pathname = location.pathname.replace(/\/$/, "");
//   // location.href = location.href.replace(/\/$/, "");
//   // console.log(location.pathname)
//   console.log(location);
// };

// // exports.onRouteUpdate = ({ location }) => {

// //   location.pathname = location.pathname.replace(/\/$/, "");
// //   location.href = location.href.replace(/\/$/, "");
// //   console.log("New page URL:", location.href);
// //   // window.location.replace(location.href)
// //   // Additional actions you want to perform after the page reloads
// // };

// // exports.onClientEntry = () => {
// //   window.addEventListener('beforeunload', (event) => {
// //     // Your custom logic here. For example:
// //     let newURL = event.target;
// //     event.preventDefault();
// //     console.log("Event :", event);
// //     console.log("New page URL:", event.target.location.href);
// //     newURL.location.href.replace(/\/$/, "");
// //     console.log(event.target.location);
// //     return false
// //     // alert()
// //     // event.returnValue = ''; // Chrome requires returnValue to be set
// //   });
// // };

// // exports.onClientEntry = () => {
// //   let path = window.location.pathname;
// //   if (path !== "/" && path.endsWith("/")) {
// //     console.log(path);
// //     window.location.replace(path.slice(0, -1) + window.location.search);
// //   }
// // };
