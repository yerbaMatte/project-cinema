import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import MyAccountPage from './Pages/MyAccountPage';
import NowPlaying from './Pages/NowPlaying';
import Root from './Pages/Root';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <h1>Main Page</h1> },
        { path: 'nowplaying', element: <NowPlaying /> },
        { path: 'signup', element: <SignUpPage /> },
        { path: 'signin', element: <SignInPage /> },
        { path: 'myaccount', element: <MyAccountPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
