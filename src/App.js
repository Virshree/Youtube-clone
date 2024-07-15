import { Provider } from 'react-redux';
import './App.css';

import appStore from './utils/appStore';
import { RouterProvider} from 'react-router-dom';
import { appRouter } from './utils/routes';

function App() {

  

  return (
 
      <Provider store={appStore}>
      <div> 
        
      <RouterProvider router={appRouter}/>
      </div>
      </Provider>
    
    
   
  );
}

export default App;
