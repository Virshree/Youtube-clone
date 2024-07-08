import { Provider } from 'react-redux';
import './App.css';

import Body from './components/Body';
// import Head from './components/Head';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ErrorBoundary from './components/ErrorBoundary';
function App() {

  
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"/error",
        errorElement:<ErrorBoundary/>
      },
      {
        path:"results",
        element:<MainContainer/>
      }
    ]
  }])
  return (
 
      <Provider store={appStore}>
      <div className=''> 
  
      <RouterProvider router={appRouter}/>
      </div>
      </Provider>
    
    
   
  );
}

export default App;
