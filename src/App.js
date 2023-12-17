import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';

import './styles/App.css';

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
  }
])

function App() {
  return (
    <RouterProvider router={websiteRoutes}></RouterProvider>
  );
}

export default App;