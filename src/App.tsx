import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
import MyAccountPage from './Pages/MyAccountPage';
import { Root } from './Pages/Root';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <h1>Main Page</h1> },
        { path: 'signin', element: <SignInPage /> },
        { path: 'signup', element: <SignUpPage /> },
        { path: 'myaccount', element: <MyAccountPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
