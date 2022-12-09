import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Deposit from './components/Deposit';
import Home from './components/Home';
import Result from './components/Result';
import Root from './components/Root';
import Withdraw from './components/Withdraw';

function App() { 
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root/>,
      errorElement : "Page Not Found", 
      children : [
        {path : '/', element : <Home/>},
        {path : '/withdraw', element : <Withdraw/>},
        {path : '/deposit', element : <Deposit/>},
        {path : '/result', element : <Result/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
