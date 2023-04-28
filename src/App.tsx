import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUpPage } from './Pages/SignUpPage';
import { SignInPage } from './Pages/SignInPage';
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
        { path: 'home', element: <HOME /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

const Home = () => {
  return <div>HOME</div>;
};

export default PrivateRoute(Home);

//1. Custom hook for auth
//2. PrivateRoute Component (HOC)
//3.
