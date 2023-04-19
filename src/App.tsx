import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Pages/Root';
import { SignUpPage } from './Pages/SignUpPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <h1>Thats my Main Page</h1> },
        { path: 'signin', element: <p>Sign In</p> },
        { path: 'signup', element: <SignUpPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
