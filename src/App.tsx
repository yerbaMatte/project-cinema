import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import MyAccount from './Pages/MyAccount';
import NowPlaying from './Pages/NowPlaying';
import Home from './Pages/Home';
import Root from './Pages/Root';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: 'nowplaying', element: <NowPlaying /> },
        { path: 'nowplaying/:day', element: <NowPlaying /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'myaccount', element: <MyAccount /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
