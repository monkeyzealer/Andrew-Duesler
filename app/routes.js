// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
     {
      path: '/',
      name: 'Home',
      getComponent(nextState, cb) {
        import('containers/Home')
          .then(loadModule(cb))
          .catch(errorLoading);
     },
   },
   {
    path: '/about',
    name: 'About',
    getComponent(nextState, cb) {
      import('containers/About')
        .then(loadModule(cb))
        .catch(errorLoading);
   },
 },
 {
  path: '/dashboard',
  name: 'Dashboard',
  getComponent(nextState, cb) {
    import('containers/Dashboard')
      .then(loadModule(cb))
      .catch(errorLoading);
 },
},
{
 path: '/single/:id',
 name: 'Single',
 getComponent(nextState, cb) {
   import('containers/Single')
     .then(loadModule(cb))
     .catch(errorLoading);
},
},
{
 path: '/auth',
 name: 'Auth',
 getComponent(nextState, cb) {
   import('containers/Auth')
     .then(loadModule(cb))
     .catch(errorLoading);
},
},
{
path: '/signup',
name: 'SignUp',
getComponent(nextState, cb) {
  import('containers/SignUp')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
path: '/test',
name: 'Test',
getComponent(nextState, cb) {
  import('containers/Test')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
path: '/update/:id',
name: 'Update',
getComponent(nextState, cb) {
  import('containers/Update')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
