// // Routes.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sig_Up from './component/Sign-Up/Sign_Up';
// import Sign_In from './component/Sign-In/Sign_In';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={Sign_In} />
//                 <Route path="/signup" component={Sign_In} />
//                 Definisikan rute-rute tambahan di sini
//             </Switch>
//         </Router>
//     );
// }

// export default App;

import Sig_Up from "./component/Sign-Up/Sign_Up";
import Sign_In from "./component/Sign-In/Sign_In";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: '/',
    element: <div><Sign_In /></div>
  },
  {
    path: '/sign-up',
    element: <div><Sig_Up /></div>
  },
])

function App(){
  return (
    <>
      <div>
        <RouterProvider router={route} />
      </div>
    </>
  )
}

export default App;